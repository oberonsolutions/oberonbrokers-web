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

<Alert
  color="danger"
  dismissible
  class="mb-1 mb-md-3 small"
  isOpen={$alerts.indexOf("2022030901") < 0}
  toggle={() => handleCancelAlert("2022030901")}
>
  Tenga en cuenta que se están creando muchas cuentas falsas en las redes sociales que pretenden ser operadas por
  PTYcoin, en un intento de estafar a nuestros clientes. Para su seguridad, nuestros corredores solo discutirán los
  detalles de una operación usando Whatsapp desde uno de los números publicados en este sitio web. No envíe dinero
  fiduciario o criptomonedas a nadie que se comunique a través de cualquier otro canal.
</Alert>
<Alert
  color="warning"
  dismissible
  class="mb-1 mb-md-3 small"
  isOpen={$alerts.indexOf("robakshzmk") < 0}
  toggle={() => handleCancelAlert("robakshzmk")}
>
  PTYcoin no está afiliado a ningún plan de inversión ni a ninguna organización multinivel. No ofrecemos ningún consejo
  de inversión ni garantizamos ningún retorno de las inversiones en criptomonedas.
</Alert>
<Alert
  color="warning"
  dismissible
  class="mb-1 mb-md-3 small"
  isOpen={$alerts.indexOf("unjsrtyhbd") < 0}
  toggle={() => handleCancelAlert("unjsrtyhbd")}
>
  Recomendamos encarecidamente a nuestros clientes que utilicen una billetera sin custodia, que genera una semilla de
  seguridad. No somos responsables de las compras de criptomonedas que se envían a una billetera de terceros.
</Alert>

