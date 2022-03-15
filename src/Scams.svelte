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
    <p class="lead text-center text-light">Alertas de Estafa:</p>
    <Container fluid class="rounded bg-light p-3">
      <h6>
        Puedes ver nuestra lista de estafadores
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vSEm9UjTAAmg91eHDsutYq2HHd_ymHWskOObU9zPsHTwfrwq6ccB_QqSvFG5ByNtiuUWqBify_VSGl4/pub"
          target="_blank"
        >
          aqui
        </a>
        .
      </h6>
    </Container>
  </Container>
{/if}

<style>
  iframe {
    margin: 0 auto;
    display: block;
  }
</style>
