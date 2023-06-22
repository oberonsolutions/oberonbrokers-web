<script>
  import { Container } from "sveltestrap";
  import { language } from "./stores";

  let lang = "es";
  language.subscribe((value) => {
    lang = value;
  });
</script>

{#if lang == "es"}
  <Container fluid class="p-0 my-3">
    <p class="lead text-center text-light">Conozca nuestros otros servicios:</p>
    <div class="row justify-content-center">
      <div class="col-xs-12 col-sm-6 col-lg-4">
        <div class="card my-1">
          <img class="card-img-top bg-light" src="img/oberonsolutions.png" alt="Oberon Solutions"/>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Asesores de Tecnología</li>
            <li class="list-group-item">Asesores de Blockchain</li>
          </ul>
          <div class="card-body">
            <i class="far fa-envelope" />
            <a href="mailto:info@oberon.solutions" class="card-link">Mas información</a>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-4">
        <div class="card my-1">
          <img class="card-img-top bg-light" src="img/stoika_web.png" alt="Stoika"/>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Diseño Grafico</li>
            <li class="list-group-item">Redes Sociales</li>
          </ul>
          <div class="card-body">
            <i class="far fa-envelope" />
            <a href="mailto:info@ptycoin.com" class="card-link">info@ptycoin.com</a>
          </div>
        </div>
      </div>
    </div>
  </Container>
{/if}
