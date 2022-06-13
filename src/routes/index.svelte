<script>
 var p1_name = "Player One";

 function host_game(event) {
     // alert(`name: ${p1_name}`);
     const game_id = crypto.randomUUID();

     window.location.href = `/lobby/${game_id}`;
 }
</script>

<h1>The Index</h1>

<input bind:value={p1_name} />
<button on:click={host_game}>Host</button>
