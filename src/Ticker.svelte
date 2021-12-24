<script>
  import { country, language } from "./stores";
  import { ticker as tickerStrings } from "./strings";
  import { firebaseConfig } from "./firebaseConfig.js";
  import { onMount } from "svelte";
  import { initializeApp } from "firebase/app";
  import { getDatabase, ref, onValue } from "firebase/database";
  import { Container, Alert, Table } from "sveltestrap";

  let market = "costa-rica";
  let data = {};
  let last = 0;
  let ticker = [];
  let strings = {};
  let warn = false;

  const refreshTicker = () => {
    // Sort the coin data
    let rows = [];
    for (const coin in data[market]) {
      const coinData = data[market][coin];
      let row = {
        id: coinData.id,
        symbol: coinData.symbol,
        name: coinData.name,
        icon: coinData.icon,
        rank: coinData.rank,
        prices: [],
      };
      for (const symbol in coinData.prices) {
        row.prices.push({
          currency: symbol,
          bid: coinData.prices[symbol].bid,
          ask: coinData.prices[symbol].ask,
        });
      }
      rows[coinData.rank] = row;
    }

    ticker = [];
    for (const row in rows) {
      if (row !== null) {
        ticker = [...ticker, rows[row]];
      }
    }
  };

  country.subscribe((value) => {
    market = value;
    refreshTicker();
  });

  language.subscribe((value) => {
    strings = tickerStrings[value];
  });

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const tickerRef = ref(db, "ticker");
  onValue(tickerRef, (snapshot) => {
    data = snapshot.val();
    last = new Date(data.last).toLocaleString();
    refreshTicker();
  });

  let lastTimer = setInterval(() => {
    let now = Date.now();
    if (now - data.last >= 5 * 60 * 1000) {
      warn = true;
    } else {
      warn = false;
    }
  }, 1000);
</script>

{#if warn}
  <Alert color="warning" class="mb-1 mb-md-3 small">{strings["outdated"]}</Alert>
{/if}

<Container fluid class="rounded bg-light p-0">
  <Table striped>
    <thead>
      <tr>
        <th><span class="d-none d-md-inline">{strings["coin"]}</span></th>
        <th class="d-none d-md-table-cell">{strings["unit"]}</th>
        <th><span class="d-none d-md-inline">{strings["currency"]}</span></th>
        <th>{strings["bid"]}</th>
        <th>{strings["ask"]}</th>
      </tr>
    </thead>
    <tbody>
      {#each ticker as item}
        <tr>
          <td class="text-nowrap">
            <img src={item.icon} alt={item.name} style="height: 2rem" />
            <span class="d-none d-md-inline">{item.name}</span>
          </td>
          <td class="d-none d-md-table-cell text-nowrap">1 {item.symbol}</td>
          <td class="text-nowrap">
            {#each item.prices as price}
              {price.currency}
              <br />
            {/each}
          </td>
          <td class="text-nowrap">
            {#each item.prices as price}
              {price.bid}
              <br />
            {/each}
          </td>
          <td class="text-nowrap">
            {#each item.prices as price}
              {price.ask}
              <br />
            {/each}
          </td>
        </tr>
      {/each}
    </tbody>
    <tfoot>
      <tr>
        <td colspan="5">{strings["lastUpdated"]} {last}</td>
      </tr>
    </tfoot>
  </Table>
</Container>
