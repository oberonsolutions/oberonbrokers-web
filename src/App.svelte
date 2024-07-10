<script>
  import { Styles, Row, Col, Container } from "sveltestrap";
  import Nav from "./Nav.svelte";
  import Contact from "./Contact.svelte";
  import Alerts from "./Alerts.svelte";
  import Ticker from "./Ticker.svelte";
  import FAQ from "./FAQ.svelte";
  import Services from "./Services.svelte";
  import Footer from "./Footer.svelte";

  import { getCountryByID, getCountryByISO } from "./countries";
  import { country, language } from "./stores";
  import { get } from "axios";

  import { firebaseConfig } from "./firebaseConfig";
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const setCountry = () => {
    // First Check to See if Country is Defined by URL
    switch (window.location.hash) {
      case "#/panama":
      case "#/costa-rica":
      case "#/colombia":
        country.set(getCountryByID(window.location.hash.substring(2)));
        return;
        break;
    }

    // If the country isn't stored locally, detect it
    if ($country === null) {
      get("https://ipinfo.io/?token=db70a6f604714a").then((response) => {
        const geo = response.data;
        country.set(getCountryByISO(geo.country));
      });
    }
  };

  const setLanguage = () => {
    language.set("es");
  };

  setLanguage();
  setCountry();
</script>

<svelte:head>
  <script src="https://kit.fontawesome.com/fc408cac96.js" crossorigin="anonymous"></script>
</svelte:head>

<Styles />

<Nav />
<main class="m-0 py-1 py-md-3">
  <Container fluid>
    <Row class="g-1 g-md-3">
      <Col xs="0" md="3" class="d-none d-md-inline">
        <Contact />
      </Col>
      <Col xs="12" md="9">
        <section id="/">
          <Contact small />
          <Alerts />
          <Ticker />
        </section>
        <section id="/faq">
          <FAQ />
        </section>
        <!--
        <section id="/services">
          <Services />
        </section>
        -->
      </Col>
    </Row>
  </Container>
</main>
<Footer />

<style>
  main {
    margin-top: 56px !important;
    background-color: #1f354a;
  }
</style>
