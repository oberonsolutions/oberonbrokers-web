<script>
  import { Alert } from "sveltestrap";
  import { alerts } from "./stores";

  if ($alerts === null) $alerts = [];

  const handleCancelAlert = (id) => {
    if ($alerts.indexOf(id) < 0) {
      $alerts = [...$alerts, id];
    }
  };
</script>

<Alert color="warning" dismissible class="mb-1 mb-md-3 small" isOpen={$alerts.indexOf("robakshzmk") < 0} toggle={() => handleCancelAlert("robakshzmk")}>
  PTYcoin no está afiliado a ningún plan de inversión ni a ninguna organización multinivel. No ofrecemos ningún
  consejo de inversión ni garantizamos ningún retorno de las inversiones en criptomonedas.
</Alert>
<Alert color="warning" dismissible class="mb-1 mb-md-3 small" isOpen={$alerts.indexOf("unjsrtyhbd") < 0} toggle={() => handleCancelAlert("unjsrtyhbd")}>
  Recomendamos encarecidamente a nuestros clientes que utilicen una billetera sin custodia, que genera una semilla de
  seguridad. No somos responsables de las compras de criptomonedas que se envían a una billetera de terceros.
</Alert>
<Alert color="primary" dismissible class="mb-1 mb-md-3 small" isOpen={$alerts.indexOf("hjdpsaiawr") < 0} toggle={() => handleCancelAlert("hjdpsaiawr")}>
  ¡PTYcoin se complace en anunciar que hemos abierto nuestras puertas en Colombia! Pregúntele a su corredor cómo comprar o vender criptomonedas en Medellín.
</Alert>
