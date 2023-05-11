<script>
  import { Container } from "sveltestrap";
  export let small = false;
</script>

{#if small}
  <Container fluid class="rounded bg-light p-3 mb-1 mb-md-3 d-md-none text-center">
    Brokers de Criptomonedas | Lunes - Viernes 10am - 6pm |
    <span class="text-nowrap">
      <i class="fab fa-whatsapp" />
      <a href="https://api.whatsapp.com/send?phone=50765709999">+507 6570-9999</a>
    </span>
    /
    <span class="text-nowrap">
      <a href="https://api.whatsapp.com/send?phone=50663776531">+506 6377-6531</a>
    </span>
    |
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
        <span class="flag-icon flag-icon-cr" />
        Heredia, Costa Rica
        <br />
      </li>
      <li class="list-group-item">Lunes - Viernes 10am - 6pm</li>
      <li class="list-group-item">
        <span class="text-nowrap">
          <i class="fab fa-whatsapp" />
          <a href="https://api.whatsapp.com/send?phone=50765709999">+507 6570-9999</a>
        </span>
        <br />
        <span class="text-nowrap">
          <i class="fab fa-whatsapp" />
          <a href="https://api.whatsapp.com/send?phone=50663776531">+506 6377-6531</a>
        </span>
        <br />
        <span class="text-nowrap">
          <i class="far fa-envelope-open" />
          <a href="mailto:info@ptycoin.com">info@ptycoin.com</a>
        </span>
        <br />
        <span class="text-nowrap">
          <big>
            <a href="https://fb.com/ptycoin"><i class="fa-brands fa-facebook" /></a>
            <a href="https://www.instagram.com/ptycoin"><i class="fa-brands fa-instagram" /></a>
          </big>
        </span>
      </li>
    </ul>
  </div>
  <div class="card my-1 my-md-3">
    <img class="card-img-top bg-light" src="img/camerablockchain.png" alt="ámara de Comercio Digital Blockchain" />
    <ul class="list-group list-group-flush">
      <li class="list-group-item">PTYcoin es miembro de la Cámara de Comercio Digital Blockchain de Panamá.</li>
    </ul>
    <div class="card-body">
      <i class="fab fa-chrome" />
      <a href="http://www.camaradigitalblockchain.org/" class="card-link">Más información</a>
    </div>
  </div>
{/if}
