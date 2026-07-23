<script>
// @ts-nocheck

import { matches } from "../lib/matchStore";

let matchList = [];
let rankings = [];

matches.subscribe((value) => {
  matchList = value;
  calculateRankings();
});

function calculateRankings() {
  const scores = {};
  matchList.forEach((match) => {
    if (match.winner) {
      scores[match.winner] = (scores[match.winner] || 0) + 1;
    }

  });

  rankings = Object.entries(scores)
    .map(([player, wins]) => ({
      player, wins
    }))
    .sort((a, b) => b.wins - a.wins)
    .slice(0, 3);

}
</script>

<section class="card">

  <h2>🏆 Final Rankings</h2>
  <table>
    <thead>
      <tr>
        <th>Rank</th>
        <th>Player</th>
        <th>Wins</th>
      </tr>
    </thead>

    <tbody>
      {#each rankings as rank, index}
      <tr>
        <td>{index + 1}</td>
        <td>{rank.player}</td>
        <td>{rank.wins}</td>
      </tr>
      {/each}
    </tbody>
    
  </table>
</section>