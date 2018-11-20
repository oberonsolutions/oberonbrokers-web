// Initial Variables
let views = { 
    'ptycoin' : { name : 'PTYcoin', fiat : 'USD', liquidity : 10000, markup : 0.035 },
    'panda' : { name : 'Panda Exchange', fiat : 'USD', liquidity : 300, markup : 0 }
}
let view = 'panda'
let altview = 'ptycoin'

let currencies = [
    { ticker: 'BTC', text: 'Bitcoin Core' },
    { ticker: 'BCH', text: 'Bitcoin Cash - En Mantenimiento' },
    { ticker: 'DASH', text: 'Dash' },
    { ticker: 'ETH', text: 'Ethereum' },
    { ticker: 'LTC', text: 'Litecoin' },
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
// thead.append('<tr><th>Moneda</th><th>Unidad</th><th>Bid (tasa / max.)</th><th>Ask (tasa / max.)</th></tr>')
thead.append('<tr><th>Moneda</th><th>Unidad</th><th class="text-right">Bid</th><th class="text-right">Ask</th></tr>')

// Table Rows
for (var i = 0; i < currencies.length; i++) {
    let row = $('<tr>')
    $('<td><img style="height: 2em;" src="img/tokens/' + currencies[i].ticker + '.png"/> ' + currencies[i].text + '</td>').appendTo(row)
    $('<td>1 ' + currencies[i].ticker + '</td>').appendTo(row)
    $('<td class="text-right"><i class="fas fa-spinner"></i></td>').attr({ id: 'ticker_' + views[view].fiat + currencies[i].ticker + '_bid' }).appendTo(row)
    $('<td class="text-right"><i class="fas fa-spinner"></i></td>').attr({ id: 'ticker_' + views[view].fiat + currencies[i].ticker + '_ask' }).appendTo(row)
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
        discoverMarket(views[view].fiat, currency.ticker, views[view].liquidity, function (market) {
            discoverLiquidity(views[view].fiat, currency.ticker, market, views[view].liquidity, function (marketLiquidity) {
                updateTicker (views[view].fiat, currency.ticker, market, marketLiquidity, '#ticker_' + views[view].fiat + currency.ticker + '_ask')
            })
        })

        // Bid
        discoverPrice (currency.ticker, views[view].fiat, function (price) {
            let liquidity = views[view].liquidity / price
            discoverMarket(currency.ticker, views[view].fiat, liquidity, function (market) {
                discoverLiquidity(currency.ticker, views[view].fiat, market, liquidity, function (marketLiquidity) {
                    updateTicker (currency.ticker, views[view].fiat, market, marketLiquidity, '#ticker_' + views[view].fiat + currency.ticker + '_bid')
                })
            })
    
        })

        let event = new Date()
        $('#ticker_updated').text('Última actualización: ' + event.toLocaleString())
    })
}

function discoverPrice (from, to, callback) {
    let url = 'https://api.panda.exchange/orders/' + from + '/until/' + to + '/type/instant/price/'

    $.get(url, function (data) {
        callback(data.rate.amount)
    })
}

function discoverMarket (from, to, liquidity, callback) {
    let url = 'https://api.panda.exchange/orders/' + from + '/until/' + to + '/type/market/price/' + liquidity + '/'

    $.get(url, function (data) {
        if (typeof data.available === 'undefined') {
            callback('market')
        } else {
            callback('instant')
        }
    })
}

function discoverLiquidity (from, to, market, liquidity, callback) {
    let url = 'https://api.panda.exchange/orders/' + from + '/until/' + to + '/type/' + market + '/price/' + liquidity + '/'

    $.get(url, function (data) {
        if (typeof data.available !== 'undefined') {
            callback(data.available.amount)
        } else {

            callback(liquidity)
        }
    })
}

function updateTicker (from, to, market, liquidity, id) {
    let url = 'https://api.panda.exchange/orders/' + from + '/until/' + to + '/type/' + market + '/price/' + liquidity + '/'

    $.get(url, function (data) {
        let price = 0
        if (from === views[view].fiat) {
            price = data.rate.amount * (1 + views[view].markup)
        } else {
            price = data.rate.amount * (1 - views[view].markup)
        }
        
        if ((from === views[view].fiat && liquidity > 0) || (from !== views[view].fiat && (data.rate.amount * liquidity > 0))) {
            let prev = $(id).text()
            // let next = price.toFixed(2) + ' / ' + liquidity + ' ' + from
            let next = price.toFixed(2) + ' ' + views[view].fiat
            next = (parseInt(price) == 0) ? next = '-' : next

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

    $('#view_button').text('Muestra precios de ' + views[altview].name)

    updateTable()
}
