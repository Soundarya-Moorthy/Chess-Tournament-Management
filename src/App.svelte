<script>
  let activeTab = "players";

  const players = [
    { id: 1, name: "Magnus Carlsen", rating: 2850 },
    { id: 2, name: "Hikaru Nakamura", rating: 2780 },
    { id: 3, name: "Ding Liren", rating: 2760 }
  ];

  const tournaments = [
    { id: 1, name: "World Championship", players: 8 },
    { id: 2, name: "Rapid Cup", players: 16 }
  ];

  const matches = [
    {
      player1: "Magnus Carlsen",
      player2: "Hikaru Nakamura",
      winner: "Magnus Carlsen"
    }
  ];

  const rankings = [
    { rank: 1, player: "Magnus Carlsen" },
    { rank: 2, player: "Hikaru Nakamura" },
    { rank: 3, player: "Ding Liren" }
  ];
</script>

<div class="container">

  <!-- Header -->
  <header>
    <h1>♟ Chess Tournament Management System</h1>
  </header>

  <!-- Navigation -->
  <nav>
    <button
      class:active={activeTab === "players"}
      on:click={() => activeTab = "players"}>
      Players
    </button>

    <button
      class:active={activeTab === "tournaments"}
      on:click={() => activeTab = "tournaments"}>
      Tournaments
    </button>

    <button
      class:active={activeTab === "matches"}
      on:click={() => activeTab = "matches"}>
      Matches
    </button>

    <button
      class:active={activeTab === "rankings"}
      on:click={() => activeTab = "rankings"}>
      Rankings
    </button>
  </nav>

  <!-- Players -->
  {#if activeTab === "players"}
    <section class="card">
      <div class="card-header">
        <h2>Players</h2>
        <button class="add-btn">+ Add Player</button>
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
          {#each players as player}
          <tr>
            <td>{player.id}</td>
            <td>{player.name}</td>
            <td>{player.rating}</td>
            <td>
              <button class="edit">Edit</button>
              <button class="delete">Delete</button>
            </td>
          </tr>
          {/each}
        </tbody>
      </table>
    </section>
  {/if}

  <!-- Tournaments -->
  {#if activeTab === "tournaments"}
    <section class="card">
      <div class="card-header">
        <h2>Tournaments</h2>
        <button class="add-btn">+ Create Tournament</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tournament</th>
            <th>Players</th>
          </tr>
        </thead>

        <tbody>
          {#each tournaments as tournament}
          <tr>
            <td>{tournament.id}</td>
            <td>{tournament.name}</td>
            <td>{tournament.players}</td>
          </tr>
          {/each}
        </tbody>
      </table>
    </section>
  {/if}

  <!-- Matches -->
  {#if activeTab === "matches"}
    <section class="card">
      <div class="card-header">
        <h2>Random Matches</h2>
        <button class="add-btn">
          Generate Match
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Player 1</th>
            <th>Player 2</th>
            <th>Winner</th>
          </tr>
        </thead>

        <tbody>
          {#each matches as match}
          <tr>
            <td>{match.player1}</td>
            <td>{match.player2}</td>
            <td>{match.winner}</td>
          </tr>
          {/each}
        </tbody>
      </table>
    </section>
  {/if}

  <!-- Rankings -->
  {#if activeTab === "rankings"}
    <section class="card">
      <h2>🏆 Final Rankings</h2>

      <div class="ranking-grid">

        {#each rankings as item}
        <div class="rank-card">
          <h3>#{item.rank}</h3>
          <p>{item.player}</p>
        </div>
        {/each}

      </div>
    </section>
  {/if}

</div>

<style>

 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background: #f4f6f9;
}

.container {
  width: 95%;
  max-width: 1400px;
  margin: auto;
  padding: 20px;
}

header {
  background: #2d2a64;
  color: white;
  text-align: center;
  padding: 25px;
  border-radius: 12px;
  margin-bottom: 20px;
}

header h1 {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  color: white;
}

/* Navigation */

nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

nav button {
  flex: 1;
  min-width: 120px;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  background: #ddd;
  transition: 0.3s;
}

nav button:hover {
  transform: translateY(-2px);
}

nav button.active {
  background: #2d2a64;
  color: white;
}

/* Cards */

.card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  overflow-x: auto;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.card-header h2 {
  color: #2d2a64;
}

.add-btn {
  background: #2d2a64;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
}

.add-btn:hover {
  opacity: 0.9;
}

/* Tables */

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
}

th {
  background: #2d2a64;
  color: white;
}

th,
td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

tr:nth-child(even) {
  background: #f8f8f8;
}

.edit {
  background: rgb(255, 166, 0);
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.delete {
  background: crimson;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 5px;
  cursor: pointer;
}

td button {
  margin-right: 5px;
}

/* Rankings */

.ranking-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.rank-card {
  background: #2d2a64;
  color: white;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
}

.rank-card h3 {
  font-size: 2.5rem;
}

/* Mobile */

@media (max-width: 768px) {

  .container {
    width: 100%;
    padding: 10px;
  }

  nav {
    flex-direction: column;
  }

  nav button {
    width: 100%;
  }

  .card-header {
    flex-direction: column;
    align-items: stretch;
  }

  .add-btn {
    width: 100%;
  }

  table {
    min-width: 500px;
  }

  .rank-card {
    padding: 20px;
  }

  .rank-card h3 {
    font-size: 2rem;
  }
}
</style>