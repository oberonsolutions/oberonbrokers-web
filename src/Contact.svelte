<script>
  import { Container } from "sveltestrap";
  export let small = false;
</script>

{#if small}
  <Container fluid class="rounded bg-light p-3 mb-1 mb-md-3 d-md-none text-center">
    Brokers de Criptomonedas | Lunes - Viernes 9am - 6pm | Tel/WhatsApp: +506 6377-6531 | Email: info@tico.exchange
  </Container>
{:else}
  <div class="card">
    <img class="card-img-top bg-light" src="img/ticologo.jpg" alt="TICO Exchange" />
    <ul class="list-group list-group-flush">
      <li class="list-group-item">TICO Exchange, Marca de Oberon Brokers</li>
      <li class="list-group-item">Brokers de Criptomonedas</li>
      <li class="list-group-item">Lunes - Viernes 9am - 6pm</li>
      <li class="list-group-item">
        Tel/WhatsApp: +506 6377-6531
        <br />
        Email: info@tico.exchange
      </li>
    </ul>
  </div>
{/if}
