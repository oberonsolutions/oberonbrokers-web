// Initial Variables
let views = { 
    'ptycoin' : { name : 'PTYcoin', market : 'instant', markup : 0.02 },
    'panda' : { name : 'Panda Exchange', market : 'market', markup : 0 }
}
let view = 'panda'
let altview = 'ptycoin'

let fiat = { ticker: 'USD', min: 10, max: 3000 }
let currencies = [
    { ticker: 'BTC', text: 'Bitcoin Core' },
    { ticker: 'BCH', text: 'Bitcoin Cash' },
    { ticker: 'ETH', text: 'Ethereum' },
    { ticker: 'LTC', text: 'Litecoin' },
    { ticker: 'TUSD', text: 'TrueUSD' },
    { ticker: 'XRP', text: 'Ripple'},
    { ticker: 'ZEC', text: 'ZCash' }
]

// Build Table
let div = $("div#ticker")
let table = $('<table>').addClass('ticker').addClass('table').addClass('table-striped')
let thead = $('<thead>')
let tbody = $('<tbody>')
let tfoot = $('<tfoot>')
div.append(table)
table.append(thead)
table.append(tbody)
table.append(tfoot)

// Table Header
thead.append('<tr><th>Moneda</th><th>Unidad</th><th>Bid (tasa / max.)</th><th>Ask (tasa / max.)</th></tr>')

// Table Rows
for (var i = 0; i < currencies.length; i++) {
    let row = $('<tr>')
    $('<td>' + currencies[i].text + '</td>').appendTo(row)
    $('<td>1 ' + currencies[i].ticker + '</td>').appendTo(row)
    $('<td><i class="fas fa-spinner"></i></td>').attr({ id: 'ticker_' + fiat.ticker + currencies[i].ticker + '_bid' }).appendTo(row)
    $('<td><i class="fas fa-spinner"></i></td>').attr({ id: 'ticker_' + fiat.ticker + currencies[i].ticker + '_ask' }).appendTo(row)
    tbody.append(row)
}

// Table Footer
tfoot.append(
    '<tr>' + 
    '<td id="ticker_updated" colspan="2">Última actualización: ' + Date() + '</td>' +
    '<td colspan="2" class="text-right"><button id="view_button" type="button" class="btn btn-primary btn-sm" onclick="updateView()"></button></td>' +
    '</tr>')

// Update The Table
setInterval(function () {
    updateTable()
}, 60 * 1000)

updateView()

function updateTable () {
    currencies.forEach(function (currency) {
        // Ask
        discoverLiquidity(fiat.ticker, currency.ticker, function (liquidity) {
            updateTicker (fiat.ticker, currency.ticker, liquidity, '#ticker_' + fiat.ticker + currency.ticker + '_ask')
        })

        // Bid
        discoverLiquidity(currency.ticker, fiat.ticker, function (liquidity) {
            updateTicker (currency.ticker, fiat.ticker, liquidity, '#ticker_' + fiat.ticker + currency.ticker + '_bid')
        })

        let event = new Date()
        $('#ticker_updated').text('Última actualización: ' + event.toLocaleString())
    })
}

function discoverLiquidity (from, to, callback) {
    let liquidity = fiat.max
    let url = 'https://api.panda.exchange/orders/' + from + '/until/' + to + '/type/' + market + '/price/' + liquidity + '/'

    $.get(url, function (data) {
        if (typeof data.available === 'undefined') {
            callback(liquidity)
        } else {
            callback(data.available.amount)
        }
    })
}

function updateTicker (from, to, liquidity, id) {
    let url = 'https://api.panda.exchange/orders/' + from + '/until/' + to + '/type/' + market + '/price/' + liquidity + '/'

    $.get(url, function (data) {
        let price = 0
        if (from === fiat.ticker) {
            price = data.rate.amount * (1 + markup)
        } else {
            price = data.rate.amount * (1 - markup)
        }
        
        if ((from === fiat.ticker && liquidity >= fiat.min) || (from !== fiat.ticker && (data.rate.amount * liquidity >= fiat.min))) {
            let prev = $(id).text()
            let next = price.toFixed(2) + ' / ' + liquidity + ' ' + from

            if (next != prev) {
                $(id).fadeOut('1000', function () {
                    $(id).text(next)
                    $(id).fadeIn('1000')    
                })
            }
        } else {
            let prev = $(id).text()
            let next = '-'

            if (next != prev) {
                $(id).fadeOut('1000', function () {
                    $(id).text(next)
                    $(id).fadeIn('1000')    
                })
            }
        }
    })
}

function updateView () {
    let currentView = view
    view = altview
    altview = currentView

    market = views[view].market
    markup = views[view].markup
    $('#view_button').text('Muestra precios de ' + views[altview].name)

    updateTable()
}