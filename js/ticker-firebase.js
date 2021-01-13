// Connect to the Database
var firebaseConfig = {
    apiKey: "AIzaSyBv9_zEvC-01wZuCwM4o_Hl9bkytZEBenk",
    authDomain: "oberon-broker.firebaseapp.com",
    databaseURL: "https://oberon-broker-default-rtdb.firebaseio.com",
    projectId: "oberon-broker",
    storageBucket: "oberon-broker.appspot.com",
    messagingSenderId: "1048626319215",
    appId: "1:1048626319215:web:433ad7430913228953a29a",
    measurementId: "G-0LXMDQSMHQ"
  };
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Initial Variables
let market = 'panama';

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
thead.append('<tr><th>Moneda</th><th>Unidad</th><th>Moneda</th><th class="text-right">Bid</th><th class="text-right">Ask</th></tr>')

// Table Footer
tfoot.append(
    '<tr>' + 
    '<td id="ticker_updated" colspan="4">Última actualización: ' + Date() + '</td>' +
    '</tr>')

// Table Body
let ticker = []
db.ref('markets/' + market).on('value', (snapshot) => {
    
    let content = ''
    snapshot.forEach((coin) => {
        let symbol = coin.key;
        let data = coin.val();
        
        console.log(symbol);
        // Table Rows
        content += '<tr>'
        content += '<td><img style="height: 2em;" src="img/tokens/' + symbol + '.png" alt="' + data.name + '"/> ' + data.name + '</td>'
        content += '<td>1 ' + symbol + '</td>'

        content += '<td>'
        for (price of Object.keys(data.prices)) {
            let key = price;
            content += key + '<br/>'
        }
        content += '</td>'
        content += '<td class="text-right">'
        for (price of Object.keys(data.prices)) {
            let key = price;
            content += data.prices[key].bid + '<br/>'
        }
        content += '</td>'
        content += '<td class="text-right">'
        for (price of Object.keys(data.prices)) {
            let key = price;
            content += data.prices[key].ask + '<br/>'
        }
        content += '</td>'
        content += '</tr>'
    });
    tbody.html(content)
    
    let event = new Date()
    $('#ticker_updated').text('Última actualización: ' + event.toLocaleString())

})
