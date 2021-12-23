<script>
  import { Container } from "sveltestrap";
  import { language } from "./stores";

  let lang = "es";
  language.subscribe((value) => {
    lang = value;
  });
</script>

{#if lang == "es"}
  <Container fluid class="p-0 m-0">
    <p class="lead text-center text-light">Preguntas Frecuentes:</p>
    <Container fluid class="rounded bg-light p-3">
      <h6>¿Qué es un corredor (broker) de criptomonedas?</h6>
      <p>
        Un corredor (broker) de criptomonedas, como cualquier corredor, es un intermediario entre un comprador y un
        vendedor. Los compradores y vendedores pueden ser personas naturales o jurídicas. La función del corredor es
        hacer coincidir a un comprador con un vendedor y garantizar que la transacción se complete a satisfacción de
        ambas partes. Un corredor de criptomonedas es simplemente un agente que se especializa en operaciones de
        intermediación entre compradores y vendedores de criptomonedas. El corredor actuará con frecuencia como una
        persona de confianza para recibir primero la criptomoneda del vendedor y luego entregársela al comprador una vez
        que se haya realizado y confirmado el pago.
      </p>
      <h6>¿Cuál es la diferencia entre un corredor y un intercambio (exchange)?</h6>
      <p>
        La función de un intercambio (exchange) de criptomoneda, es que en el intercambio se depositan fondos (ya sea en
        criptomonedas o en una moneda nacional) y otorga la custodia de esos fondos al receptor. El receptor mantendrá
        esos fondos en depósito (similar a la forma en que un banco mantiene los fondos de los clientes en depósito) y
        el cliente puede intercambiarlos por otras criptomonedas o moneda nacional a voluntad, generalmente con una
        frecuencia más alta de la que lo haría o podría hacerlo a través de un corredor.
      </p>
      <p>
        A diferencia, un corredor en función de puente, retendrá fondos solo por el monto de la transacción y sólo
        durante la duración de la transacción. Una vez que se completa la transacción del emisor y el receptor, todos
        los fondos (menos la tarifa del corredor) se entregan al comprador y al vendedor.
      </p>
      <h6>¿Qué es un token de criptomoneda?</h6>
      <p>
        A diferencia de las monedas y el efectivo, la criptomoneda solo existe en un libro de contabilidad digital,
        compartida y asegurada por el consenso de todos los usuarios de esta criptomoneda. En lugar de pasar un objeto
        físico entre dos usuarios, una transacción mueve una cierta cantidad de esta criptomoneda. Un token es un nombre
        general para una unidad de una criptomoneda. Dependiendo de la criptomoneda, el tamaño y el valor de un token
        pueden variar mucho, y la mayoría de las criptomonedas dan un nombre distinto a los tokens que se negocian en su
        libro mayor. Algunos tokens, por ejemplo Bitcoin, son fungibles, lo que significa que todos son intercambiables
        y el valor de un token es siempre el mismo que el valor de otro. Algunos tokens, por ejemplo Axies o
        Cryptopunks, no son fungibles, lo que significa que cada token es único y tiene su propio valor.
      </p>
      <h6>¿Qué es una billetera de criptomonedas?</h6>
      <p>
        Una billetera de criptomonedas es un dispositivo o aplicación que genera una clave secreta, que se utiliza para
        firmar transacciones en el libro mayor digital, demostrando a todos los usuarios de esta criptomoneda que el
        propietario de la billetera es el verdadero propietario de los tokens que se envían. Esta clave secreta nunca
        debe compartirse con nadie, porque cualquiera que conozca la clave puede reclamar la propiedad de los tokens
        asociados con la billetera. Del mismo modo, cualquiera que no conozca la clave secreta no tiene forma de
        reclamar la propiedad de los tokens.
      </p>
      <h6>¿Qué es una billetera sin custodia?</h6>
      <p>
        Billetera sin custodia es el término que se utiliza para describir una billetera controlada directamente por la
        persona o empresa que realmente posee los tokens. En términos de dinero en efectivo o monedas, una billetera sin
        custodia es similar a la billetera de una persona o una caja fuerte en casa.
      </p>
      <h6>¿Qué es una billetera de custodia?</h6>
      <p>
        Billetera de custodia es el término que se utiliza para describir una billetera controlada por un custodio
        externo, como un banco o una casa de cambio. El custodio retiene los tokens de los usuarios y los mantiene a
        salvo, en nombre del cliente que los deposita con el custodio. Al igual que un banco o una casa de cambio, se
        puede confiar en un custodio legítimo para enviar transacciones a petición del cliente.
      </p>
      <h6>¿Por qué debería usar una billetera sin custodia?</h6>
      <p>
        Desafortunadamente, el uso de una billetera de custodia requiere que una persona confíe plenamente en el
        custodio. Si el custodio es legítimo, la persona debe tener un uso completo de sus tokens sin problema. Sin
        embargo, si el custodio NO es legítimo, no hay forma de evitar la pérdida completa de esos tokens. Es
        extremadamente común que personas inocentes y desprevenidas se conviertan en víctimas de fraude por parte de
        grupos o individuos que hacen afirmaciones falsas de poder garantizar un alto retorno de su inversión, o
        simplemente ofrecen un producto o servicio que nunca han tenido la intención de brindar. La MEJOR manera en que
        una persona puede garantizar la seguridad de sus tokens es guardarlos personalmente en una billetera segura sin
        custodia. Cuanto más valgan esos tokens, más fuerte debe ser la billetera sin custodia. Hay muchas opciones
        disponibles, incluidos dispositivos especializados que nunca están conectados directamente al Internet.
      </p>
      <h6>¿En qué criptomoneda debería invertir?</h6>
      <p>
        No somos asesores de inversiones y no hacemos recomendaciones sobre en qué criptomonedas deben invertir nuestros
        clientes. No podemos aceptar la responsabilidad por las ganancias o pérdidas asociadas con esas inversiones.
        Siempre sugerimos que nuestros clientes investiguen cuidadosamente cualquier oportunidad de inversión potencial
        y solo inviertan lo que puedan permitirse perder. Adicionalmente que utilicen una billetera sin custodia para
        recibir cualquier criptomoneda que compren a través de uno de nuestros corredores. Solo podemos ser responsables
        de garantizar la entrega de los tokens a la dirección de billetera que proporcione el cliente. Lo que suceda más
        allá de eso es responsabilidad del cliente.
      </p>
      <h6>¿Cómo invierto mi dinero en criptomonedas?</h6>
      <p>
        Si bien no hacemos recomendaciones sobre en qué criptomoneda u oportunidad de inversión debe invertir un
        cliente, no somos responsables del valor de las criptomonedas que compran nuestros clientes, podemos sugerir la
        estrategia más segura para evitar una pérdida del 100%. Resaltamos encarecidamente que cualquier criptomoneda
        que compren nuestros clientes se entregue y se guarde en una billetera sin custodia y sea controlada
        directamente por nuestro cliente, y solo se mueva de esa billetera para colocarla en una billetera sin custodia
        más segura, o al convertir a otra cosa.
      </p>
      <h6>¿Mi dinero está a salvo contigo?</h6>
      <p>
        Hacemos todo lo posible para limitar la confianza que nuestros clientes deben depositar en nosotros y para
        asegurarnos de que todas y cada una de las transacciones se completen de la manera más eficiente y segura
        posible. Solo retenemos el dinero de nuestros clientes durante la duración de la transacción, y solo por el
        monto de la transacción. La mayoría de las transacciones se completan en unos pocos minutos a una hora. Hay
        problemas técnicos ocasionales que pueden retrasar algunas transacciones, pero siempre trabajamos para resolver
        esos problemas lo más rápido posible o para encontrar una solución alternativa. Dicho esto, la naturaleza de
        nuestro negocio requiere que nuestros clientes nos confíen temporalmente su dinero. Por esa razón, aconsejamos a
        los nuevos clientes que visiten nuestras oficinas y realicen transacciones en efectivo, solo en las cantidades
        con las que se sientan cómodos. De esta manera, pueden ver nuestro proceso de primera mano y comprender cómo
        operamos antes de tomar la decisión de realizar operaciones mediante transferencia bancaria.
      </p>
      <h6>Aclaramos que</h6>
      <p>
        Nuestra marca, Oberon Brokers, no está afiliada ni asociada con ninguna empresa, entidad o persona. El servicio
        de corredor es independiente de cualquier sistema de inversión o plataforma multinivel, piramidal o ponzi. Por
        este motivo, la transacción que se realiza es "Peer-to-Peer" (P2P). Cada persona es responsable de lo que hace
        con sus billeteras y tokens de criptomonedas.
      </p>
      <p>
        Cada persona es responsable de la dirección de billetera que indique para realizar el envío y dónde recibirán
        sus tokens (incluida cualquier criptomoneda de nuestra lista y según las pautas).
      </p>
    </Container>
  </Container>
{/if}
