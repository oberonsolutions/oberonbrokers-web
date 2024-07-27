<script>
  import { Container } from "sveltestrap";
  export let small = false;
</script>

{#if !small}
  <div class="card">
    <img class="card-img-top bg-light" src="img/ptycoin.jpg" alt="PTYcoin" />
  </div>
{/if}
