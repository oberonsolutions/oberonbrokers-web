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

// Initial Variables
let fiat = 'PAB'

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

// Table Footer
tfoot.append(
    '<tr>' + 
    '<td id="ticker_updated" colspan="4">Última actualización: ' + Date() + '</td>' +
    '</tr>')

// Table Body
let ticker = []
db.collection('markets').doc(fiat).collection('coins')
    .onSnapshot(querySnapshot => {
        let content = ''
        querySnapshot.forEach(doc => {
            let data = doc.data()
            console.log(data.name)
            // Table Rows
            content += '<tr>'
            content += '<td><img style="height: 2em;" src="img/tokens/' + data.symbol + '.png" alt="' + data.name + '"/> ' + data.name + '</td>'
            content += '<td>1 ' + data.symbol + '</td>'
            content += '<td class="text-right">' + data.bid + '</td>'
            content += '<td class="text-right">' + data.ask + '</td>'
            content += '</tr>'
        })
        tbody.html(content)
        
        let event = new Date()
        $('#ticker_updated').text('Última actualización: ' + event.toLocaleString())
})
