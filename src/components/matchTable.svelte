<script>
// @ts-nocheck

import { tournaments } from "../lib/tournamentStore";
import { matches } from "../lib/matchStore";

let tournamentList = [];
let matchList = [];

tournaments.subscribe((value) => {
  tournamentList = value;
});

matches.subscribe((value) => {
  matchList = value;
});

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(
      Math.random() * (i + 1)
    );

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

function generateMatches() {

  let generatedMatches = [];
  tournamentList.forEach((tournament) => {

    let roundPlayers = shuffle([...tournament.players]);
    let round = 1;
    while (roundPlayers.length > 1) {
      let winners = [];

      for (
        let i = 0;
        i < roundPlayers.length;
        i += 2
      ) {

        const player1 = roundPlayers[i];
        const player2 = roundPlayers[i + 1];

        if (!player2) {

          winners.push(player1);

          generatedMatches.push({
            id: Date.now() + Math.random(),
            tournament: tournament.name,
            round: round,
            player1: player1,
            player2: "BYE",
            winner: player1
          });

          continue;
        }

        const winner = Math.random() > 0.5 ? player1 : player2;

        winners.push(winner);

        generatedMatches.push({
          id: Date.now() + Math.random(),
          tournament: tournament.name,
          round: round,
          player1: player1,
          player2: player2,
          winner: winner
        });

      }

      roundPlayers = winners;
      round++;
    }

    generatedMatches.push({
      id: Date.now() + Math.random(),
      tournament: tournament.name,
      round: "Champion",
      player1: "-",
      player2: "-",
      winner: roundPlayers[0]
    });

  });

  matches.set(generatedMatches);

  alert(
    "Matches generated successfully"
  );
}
</script>

<section class="card">

  <h2>Matches</h2>

  <button class="add-btn" onclick={generateMatches}>
    Generate Matches
  </button>

  <table>
    <thead>
      <tr>
        <th>Tournament</th>
        <th>Round</th>
        <th>Player 1</th>
        <th>Player 2</th>
        <th>Winner</th>
      </tr>
    </thead>

    <tbody>

      {#if matchList.length === 0}
      <tr>
        <td colspan="5">
          No matches generated
        </td>
      </tr>

      {/if}

      {#each matchList as match (match.id)}

      <tr>
        <td>{match.tournament}</td>
        <td>{match.round}</td>
        <td>{match.player1}</td>
        <td>{match.player2}</td>
        <td>
          <strong>
            {match.winner}
          </strong>
        </td>
      </tr>
      {/each}

    </tbody>
  </table>
</section>