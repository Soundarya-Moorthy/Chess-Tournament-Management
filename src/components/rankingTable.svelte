<script>
  let rankings = [
    { rank: 1, player: "Magnus Carlsen" },
    { rank: 2, player: "Hikaru Nakamura" },
    { rank: 3, player: "Ding Liren" }
  ];
</script>

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