// Initial Variables
let markup = 0.07
let offset = -0.02
let fiat = 'PAB'

let currencies = [
    { ticker: 'BTC', text: 'Bitcoin Core', coincapId: 'bitcoin' },
    { ticker: 'BCH', text: 'Bitcoin Cash', coincapId: 'bitcoin-cash' },
    { ticker: 'BSV', text: 'Bitcoin SV', coincapId: 'bitcoin-sv' },
    { ticker: 'DAI', text: 'Dai Stablecoin v1.0', coincapId: 'dai' },
    { ticker: 'DASH', text: 'Dash', coincapId: 'dash' },
    { ticker: 'ETH', text: 'Ethereum', coincapId: 'ethereum' },
    { ticker: 'LTC', text: 'Litecoin', coincapId: 'litecoin' },
    { ticker: 'USDT', text: 'TetherUSD', coincapId: 'tether' },
    { ticker: 'XRP', text: 'Ripple', coincapId: 'ripple'},
    { ticker: 'ZEC', text: 'ZCash', coincapId: 'zcash' }
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
thead.append('<tr><th>Moneda</th><th>Unidad</th><th class="text-right">Bid (' + fiat + ')</th><th class="text-right">Ask (' + fiat + ')</th></tr>')

// Table Rows
for (var i = 0; i < currencies.length; i++) {
    let row = $('<tr>')
    $('<td><img style="height: 2em;" src="img/tokens/' + currencies[i].ticker + '.png"/> ' + currencies[i].text + '</td>').appendTo(row)
    $('<td>1 ' + currencies[i].ticker + '</td>').appendTo(row)
    $('<td class="text-right"><i class="fas fa-spinner"></i></td>').attr({ id: 'ticker_' + currencies[i].ticker + '_bid' }).appendTo(row)
    $('<td class="text-right"><i class="fas fa-spinner"></i></td>').attr({ id: 'ticker_' + currencies[i].ticker + '_ask' }).appendTo(row)
    tbody.append(row)
}

// Table Footer
tfoot.append(
    '<tr>' + 
    '<td id="ticker_updated" colspan="4">Última actualización: ' + Date() + '</td>' +
    '</tr>')

// Update The Table
setInterval(function () {
    updateTable()
}, 60 * 1000)

updateTable()

function updateTable () {
    currencies.forEach(function (currency) {
        updateTicker(currency)

        let event = new Date()
        $('#ticker_updated').text('Última actualización: ' + event.toLocaleString())
    })
}

function updateTicker (currency) {
    let url = 'https://api.coincap.io/v2/assets/' + currency.coincapId

    $.get(url, function (data) {
        if (typeof data.data === 'undefined') {
            console.log('No data for ' + currency.coincapId)
        } else {
            let price = parseFloat(data.data.priceUsd)
            let bid = price * (1 + offset - markup)
                ask = price * (1 + offset + markup)
    
            updateEntry(currency.ticker, 'bid', bid)
            updateEntry(currency.ticker, 'ask', ask)  
        }
    })
}

function updateEntry (ticker, side, price) {

    let id = '#ticker_' + ticker + '_' + side
    let prev = $(id).text()
    let next = price.toFixed(2)

    next = (parseFloat(price) == 0) ? next = '-' : next

    if (next !== prev) {
        $(id).fadeOut('1000', function () {
            $(id).text(next)
            $(id).fadeIn('1000')    
        })
    }

}
