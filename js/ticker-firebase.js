// Initial Variables
let fiat = 'PAB'

/*
let currencies = [
    { ticker: 'BTC', text: 'Bitcoin Core (Tarifa minera $1.00)' },
    { ticker: 'BCH', text: 'Bitcoin Cash' },
    { ticker: 'BTG', text: 'Bitcoin Gold' },
    { ticker: 'DAI', text: 'Dai Stablecoin v1.0' },
    { ticker: 'DASH', text: 'Dash' },
    { ticker: 'ETH', text: 'Ethereum' },
    { ticker: 'LTC', text: 'Litecoin' },
    { ticker: 'OPAB', text: 'Oberon Cash PAB' },
    { ticker: 'USDT', text: 'TetherUSD (Tarifa minera $1.00)' },
    { ticker: 'WAVES', text: 'Waves' },
    { ticker: 'XRP', text: 'Ripple'},
    { ticker: 'ZEC', text: 'ZCash' }
]
 */

let currencies = [
    { ticker: 'BTC', text: 'Bitcoin Core (Tarifa minera $1.00)' },
    { ticker: 'BCH', text: 'Bitcoin Cash' },
    { ticker: 'DAI', text: 'Dai Stablecoin v1.0' },
    { ticker: 'DASH', text: 'Dash' },
    { ticker: 'ETH', text: 'Ethereum' },
    { ticker: 'LTC', text: 'Litecoin' },
    { ticker: 'OPAB', text: 'Oberon Cash PAB' },
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
thead.append('<tr><th>Moneda</th><th>Unidad</th><th class="text-right">Bid (' + fiat + ')</th><th class="text-right">Ask (' + fiat + ')</th></tr>')

// Table Rows
for (var i = 0; i < currencies.length; i++) {
    let row = $('<tr>')
    $('<td><img style="height: 2em;" src="img/tokens/' + currencies[i].ticker + '.png" alt="' + currencies[i].text + '"/> ' + currencies[i].text + '</td>').appendTo(row)
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

// Connect to the Database
const firebaseConfig = {
    apiKey: "AIzaSyCH6bvbyWoMZY-R3UqC4V9VIlwYz7DrFwk",
    authDomain: "ptycoin.firebaseapp.com",
    databaseURL: "https://ptycoin.firebaseio.com",
    projectId: "ptycoin",
    storageBucket: "ptycoin.appspot.com",
    messagingSenderId: "426302239289"
}
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

let ticker = []
db.collection('markets').doc('PAB').collection('coins')
    .onSnapshot(querySnapshot => {
        querySnapshot.forEach(doc => {
            let data = doc.data()
            updateEntry(data.symbol, 'bid', data.bid)
            updateEntry(data.symbol, 'ask', data.ask)
        })
        let event = new Date()
        $('#ticker_updated').text('Última actualización: ' + event.toLocaleString())
})

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
