<script>
  import { Container } from "sveltestrap";
  export let small = false;
</script>

{#if small}
  <Container fluid class="rounded bg-light p-3 mb-1 mb-md-3 d-md-none text-center">
    Brokers de Criptomonedas | Lunes - Viernes 10am - 6pm | Tel/WhatsApp: +507 6570-9999 | Email: info@ptycoin.com
  </Container>
{:else}
  <div class="card">
    <img class="card-img-top bg-light" src="img/ptycoin.jpg" alt="PTYcoin" />
    <ul class="list-group list-group-flush">
      <li class="list-group-item">PTYcoin, Marca de Oberon Brokers</li>
      <li class="list-group-item">Brokers de Criptomonedas</li>
      <li class="list-group-item">Lunes - Viernes 10am - 6pm</li>
      <li class="list-group-item">
        Tel/WhatsApp: +507 6570-9999
        <br />
        Email: info@ptycoin.com
      </li>
    </ul>
  </div>
  <div class="card my-1 my-md-3">
    <img class="card-img-top bg-light" src="img/camerablockchain.png" alt="ámara de Comercio Digital Blockchain"/>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">PTYcoin es miembro de la Cámara de Comercio Digital Blockchain de Panamá.</li>
    </ul>
    <div class="card-body">
      <i class="fab fa-chrome" />
      <a href="http://www.camaradigitalblockchain.org/" class="card-link">Más información</a>
    </div>
  </div>
{/if}
