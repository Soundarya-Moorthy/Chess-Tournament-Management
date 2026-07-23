<script>
// @ts-nocheck
  import { players } from "../lib/playerStore";
  import { tournaments } from "../lib/tournamentStore";

  let playerList = [];
  let tournamentList = [];
  let tournamentName = "";
  let selectedPlayers = [];
  let editId = null;

  players.subscribe((value) => {
    playerList = value;
  });

  tournaments.subscribe((value) => {
    tournamentList = value;
  });

  function addTournament() {

  if (!tournamentName.trim()) {
    alert("Enter tournament name");
    return;
  }

  if (selectedPlayers.length === 0) {
    alert("Select at least one player");
    return;
  }

  if (editId !== null) {

    tournaments.update((current) =>
      current.map((tournament) =>
        tournament.id === editId
          ? {
              ...tournament,
              name: tournamentName,
              players: [...selectedPlayers]
            }
          : tournament
      )
    );

    editId = null;

  } else {

    tournaments.update((current) => [
      ...current,
      {
        id:
      current.length > 0
        ? Math.max(...current.map(t => t.id)) + 1
        : 1,
        name: tournamentName,
        players: [...selectedPlayers]
      }
    ]);

  }

  tournamentName = "";
  selectedPlayers = [];
}

  function editTournament(tournament) {

  tournamentName = tournament.name;
  selectedPlayers = [...tournament.players];
  editId = tournament.id;

}

  function deleteTournament(id, name) {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${name}"?`
    );

    if (confirmed) {
      tournaments.update((current) =>
        current.filter(
          (tournament) => tournament.id !== id
        )
      );
    }
  }

  function togglePlayer(playerName) {
    if (selectedPlayers.includes(playerName)) {
      selectedPlayers = selectedPlayers.filter(
        (name) => name !== playerName
      );
    } else {
      selectedPlayers = [
        ...selectedPlayers,
        playerName
      ];
    }
  }
</script>

<section class="card">
  <h2>Tournaments</h2>
  <div class="form-container">
  <input
    bind:value={tournamentName}
    placeholder="Tournament Name"
  />
</div>

<div class="player-selection">
  <h4>Select Players</h4>
  {#each playerList as player}
    <div class="player-item">
      <input
        type="checkbox"
        id={"player-" + player.id}
        checked={selectedPlayers.includes(player.name)}
        onchange={() => togglePlayer(player.name)}
      />

      <label for={"player-" + player.id}>
        {player.name}
      </label>
    </div>
  {/each}
</div>

<button class="add-btn" onclick={addTournament}>
  {editId !== null
    ? "Update Tournament"
    : "Create Tournament"}
</button>

  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Tournament</th>
        <th>Players</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>
      {#if tournamentList.length === 0}
      <tr>
        <td colspan="4">
          No tournaments found
        </td>
      </tr>

      {/if}

      {#each tournamentList as tournament}

      <tr>
        <td>{tournament.id}</td>
        <td>{tournament.name}</td>
        <td>{tournament.players.join(", ")}</td>
        <td>
          <button class="edit" onclick={() => editTournament(tournament)}
          > Edit
          </button>

          <button
            class="delete" onclick={() =>
              deleteTournament(
                tournament.id,
                tournament.name
              )
            }
          >
            Delete
          </button>
        </td>
      </tr>
      {/each}
    </tbody>
  </table>
</section>