<script>
 import { browser } from '$app/env';

 ///
 const SOUP_API_ROOT = "/api";
 const REG_ENDPOINT = `${SOUP_API_ROOT}/register/player`;
 //
 function url_last_get(url) {
     return url.substring(url.lastIndexOf("/") + 1)
 }
 ///

 var game_id = "NA";
 var player_name = "";

 function register_req(event) {
     fetch(REG_ENDPOINT, {
         method: "POST",
         headers: {
             Accept: "application/json",
             "Content-Type": "application/json",
         },
         body: JSON.stringify({ game_id: game_id, name: player_name }),
     }).then((response) => (response.json())).then((res_json) => alert(JSON.stringify(res_json)));
 }

 if (browser) {
     game_id = url_last_get(window.location.pathname);
 }
</script>

{#if browser}
    <p>game_id: {game_id}</p>

    <input bind:value={player_name} placeholder="your name" />

    <button on:click={register_req}>Join</button>
{:else}
    <p>Loading ...</p>
{/if}
