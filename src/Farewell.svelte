<script>
  import { Container } from "sveltestrap";
  import { language } from "./stores";

  let lang = "es";
  language.subscribe((value) => {
    lang = value;
  });
</script>

<Container fluid class="p-0 m-0">
  <Container fluid class="rounded bg-light p-3">
    <div style="text-align: justify">
    {#if lang == "es"}
      <p class="lead">
        En 2012, PTYcoin emprendió la misión de presentar Bitcoin a Panamá. Poco
        sabíamos el profundo impacto que tendríamos.
      </p>
      <p>
        Hoy, Bitcoin es un nombre familiar en Panamá, y la comunidad cripto ha
        florecido más allá de nuestras expectativas. Incluso las instituciones
        financieras más escépticas han abrazado el panorama de activos
        digitales. Estamos inmensamente orgullosos de nuestro papel en este
        viaje transformador.
      </p>
      <p>
        Habiendo logrado nuestra misión fundacional, hemos tomado la difícil
        decisión de dejar de aceptar nuevos socios comerciales. Seguimos
        comprometidos a apoyar a nuestros socios existentes y
        estamos disponibles a través de nuestros canales habituales.
      </p>
      <p>
        Gracias por ser parte de nuestros esfuerzos pioneros. Ha sido un
        privilegio trabajar con todos ustedes.
      </p>
    {/if}
    {#if lang == "en"}
      <p class="lead">
        In 2012, PTYcoin embarked on a mission to introduce Panama to Bitcoin.
        Little did we know the profound impact we would have.
      </p>
      <p>
        Today, Bitcoin is a household name in Panama, and the crypto community
        has flourished beyond our expectations. Even the most skeptical
        financial institutions have embraced the digital asset landscape. We are
        immensely proud of our role in this transformative journey.
      </p>
      <p>
        Having achieved our founding mission, we’ve made the difficult decision
        to cease accepting new trading partners. We remain committed to
        supporting our existing trading partners and are available through our
        usual channels.
      </p>
      <p>
        Thank you for being a part of our pioneering efforts. It has been a
        privilege to work with you all.
      </p>
    {/if}
    </div>
  </Container>
</Container>
