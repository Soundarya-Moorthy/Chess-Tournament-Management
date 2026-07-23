<script>
// @ts-nocheck
import { players } from "../lib/playerStore";

let playerList = [];

players.subscribe((value) => {
  playerList = value;
  console.log("Tournament Player List:", value);
});

  let playerName = "";
  let playerRating = "";

  /** @type {number | null} */
  let editId = null;

  function addPlayer() {
  if (!playerName.trim() || !playerRating) {
    alert("Please fill all fields");
    return;
  }

  if (editId !== null) {

    // UPDATE EXISTING PLAYER
    players.update((current) =>
      current.map((player) =>
        player.id === editId
          ? {
              ...player,
              name: playerName,
              rating: Number(playerRating)
            }
          : player
      )
    );

    editId = null;

  } else {

    // ADD NEW PLAYER
    players.update((current) => [
      ...current,
      {
        id: current.length > 0
          ? Math.max(...current.map(p => p.id)) + 1
          : 1,
        name: playerName,
        rating: Number(playerRating)
      }
    ]);

  }

  playerName = "";
  playerRating = "";
}

  function editPlayer(player) {
    playerName = player.name;
    playerRating = player.rating.toString();
    editId = player.id;
  }

  function deletePlayer(id, playerName) {
  const confirmed = window.confirm(
    `Are you sure you want to delete "${playerName}"?`
  );

  if (confirmed) {
    players.update((current) =>
  current.filter(
    (player) => player.id !== id
  )
);
  }
}

</script>

<section class="card">

  <h2>Players</h2>

  <div class="form-container">

    <input
      bind:value={playerName}
      placeholder="Player Name">

    <input
      bind:value={playerRating}
      type="number"
      placeholder="Rating">

    <button class="add-btn" on:click={addPlayer}>
      {editId !== null ? "Update Player" : "Add Player"}
    </button>

  </div>

  <table>

    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Rating</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>

      {#each playerList as player}

      <tr>
        <td>{player.id}</td>
        <td>{player.name}</td>
        <td>{player.rating}</td>

        <td>
          <button
            class="edit"
            on:click={() => editPlayer(player)}>
            Edit
          </button>

          <button
            class="delete"
            on:click={() => deletePlayer(player.id, player.name)}>
            Delete
          </button>
        </td>
      </tr>

      {/each}

    </tbody>

  </table>

</section>