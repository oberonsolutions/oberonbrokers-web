<script>
  import { Container } from "sveltestrap";
  export let small = false;
</script>

{#if small}
  <Container fluid class="rounded bg-light p-3 mb-1 mb-md-3 d-md-none text-center">
    Brokers de Criptomonedas | Lunes - Viernes 10am - 6pm | Tel/WhatsApp: +507 6570-9999 | Email: info@oberonbrokers.com
  </Container>
{:else}
  <div class="card">
    <img class="card-img-top bg-light" src="img/oberonbrokerslogo.jpg" alt="Oberon Brokers" />
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Brokers de Criptomonedas</li>
      <li class="list-group-item">Lunes - Viernes 10am - 6pm</li>
      <li class="list-group-item">
        Tel/WhatsApp: +507 6570-9999
        <br />
        Email: info@oberonbrokers.com
      </li>
    </ul>
  </div>
{/if}
