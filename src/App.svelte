<script>
  import { Styles, Row, Col, Container } from "sveltestrap";
  import Nav from "./Nav.svelte";
  import Contact from "./Contact.svelte";
  import Alerts from "./Alerts.svelte";
  import Ticker from "./Ticker.svelte";
  import FAQ from "./FAQ.svelte";
  import Services from "./Services.svelte";
  import Footer from "./Footer.svelte";
</script>

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
        <section id="/services">
          <Services />
        </section>
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
