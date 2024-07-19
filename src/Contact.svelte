<script>
  import { Container } from "sveltestrap";
  export let small = false;
</script>

{#if small}
  <Container fluid class="rounded bg-light p-3 mb-1 mb-md-3 d-md-none text-center">
    Brokers de Criptomonedas | 
    <span class="text-nowrap">
      <i class="far fa-envelope-open" />
      <a href="mailto:info@ptycoin.com">info@ptycoin.com</a>
    </span>
  </Container>
{:else}
  <div class="card">
    <img class="card-img-top bg-light" src="img/ptycoin.jpg" alt="PTYcoin" />
    <ul class="list-group list-group-flush">
      <li class="list-group-item">PTYcoin, Marca de Oberon Brokers</li>
      <li class="list-group-item">Brokers de Criptomonedas</li>
      <li class="list-group-item">
        <span class="flag-icon flag-icon-pa" />
        Panamá, Republica de Panamá
        <br />
      </li>
      <li class="list-group-item">
        <span class="text-nowrap">
          <i class="far fa-envelope-open" />
          <a href="mailto:info@ptycoin.com">info@ptycoin.com</a>
        </span>
      </li>
    </ul>
  </div>
{/if}
