<script>
  import { Container } from "sveltestrap";
  export let small = false;
</script>

{#if small}
  <Container
    fluid
    class="rounded bg-light p-3 mb-1 mb-md-3 d-md-none text-center"
  >
    Brokers de Criptomonedas | Lunes - Viernes 10am - 6pm |
    <span class="text-nowrap">
      <i class="fab fa-whatsapp" />
      <a href="https://api.whatsapp.com/send?phone=50765709999"
        >+507 6570-9999</a
      >
    </span>
    /
    <span class="text-nowrap">
      <a href="https://api.whatsapp.com/send?phone=50663776531"
        >+506 6377-6531</a
      >
    </span>
    |
    <span class="text-nowrap">
      <i class="far fa-envelope-open" />
      <a href="mailto:info@oberonbrokers.com">info@oberonbrokers.com</a>
    </span>
  </Container>
{:else}
  <div class="card">
    <img
      class="card-img-top bg-light"
      src="img/oberonbrokerslogo.jpg"
      alt="Oberon Brokers"
    />
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Brokers de Criptomonedas</li>
      <li class="list-group-item">Lunes - Viernes 10am - 6pm</li>
      <li class="list-group-item">
        <span class="text-nowrap">
          <i class="fab fa-whatsapp" />
          <a href="https://api.whatsapp.com/send?phone=50765709999"
            >+507 6570-9999</a
          >
        </span>
        <br />
        <span class="text-nowrap">
          <i class="fab fa-whatsapp" />
          <a href="https://api.whatsapp.com/send?phone=50663776531"
            >+506 6377-6531</a
          >
        </span><br />
        <span class="text-nowrap">
          <i class="far fa-envelope-open" />
          <a href="mailto:info@oberonbrokers.com">info@oberonbrokers.com</a>
        </span>
      </li>
    </ul>
  </div>
{/if}
