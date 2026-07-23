<script>
  let count = $state(0)
</script>

<button type="button" class="counter" on:click={() => count++}>Count is {count}</button>
