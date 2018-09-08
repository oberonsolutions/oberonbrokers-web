const fiat = 'USD'
const currencies = [
    { 
        ticker: 'BTC', 
        text: 'Bitcoin Core'
    },
    {
        ticker: 'BCH',
        text: 'Bitcoin Cash'
    },
    {
        ticker: 'ETH',
        text: 'Ethereum'
    }
]
const liquidity = 1000

let div = $("div#ticker")

// Build Table
let table = $('<table>').addClass('ticker')
let thead = $('<thead>')
thead.append('<tr><th>Moneda</th><th>Unidad</th><th>Compramos</th><th>Vendemos</th></tr>')

let tbody = $('<tbody>')
for (var i = 0; i < currencies.length; i++) {
    let row = $('<tr>')
    $('<td>' + currencies[i].text + '</td>').appendTo(row)
    $('<td>1 ' + currencies[i].ticker + '</td>').appendTo(row)
    $('<td>-</td>').attr({ id: 'ticker.' + currencies[i].ticker + fiat + '.bid' }).appendTo(row)
    $('<td>-</td>').attr({ id: 'ticker.' + currencies[i].ticker + fiat + '.ask' }).appendTo(row)
    tbody.append(row)
}

div.append(table)
table.append(thead)
table.append(tbody)


function updateTicker (from, to, amount, id) {
    let url = 'https://api.panda.exchange/orders' +
              from + '/until/' + to +




}
