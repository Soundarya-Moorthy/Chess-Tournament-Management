<script>
  import "./app.css";

  import PlayerForm from "./components/playerForm.svelte";
  import TournamentForm from "./components/tournamentForm.svelte";
  import MatchTable from "./components/matchTable.svelte";
  import RankingTable from "./components/rankingTable.svelte";
  import "./app.css";

  let activeTab = "players";
  
</script>

<div class="container">

  <header>
    <h1>♟ Chess Tournament Management System</h1>
  </header>

  <nav>
    <button
      class:active={activeTab === "players"}
      onclick={() => activeTab = "players"}>
      Players
    </button>

    <button
      class:active={activeTab === "tournaments"}
      onclick={() => activeTab = "tournaments"}>
      Tournaments
    </button>

    <button
      class:active={activeTab === "matches"}
      onclick={() => activeTab = "matches"}>
      Matches
    </button>

    <button
      class:active={activeTab === "rankings"}
      onclick={() => activeTab = "rankings"}>
      Rankings
    </button>
  </nav>

  {#if activeTab === "players"}
    <PlayerForm />
  {/if}

  {#if activeTab === "tournaments"}
    <TournamentForm />
  {/if}

  {#if activeTab === "matches"}
    <MatchTable />
  {/if}

  {#if activeTab === "rankings"}
    <RankingTable />
  {/if}

</div>