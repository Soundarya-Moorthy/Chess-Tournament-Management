// @ts-nocheck
import { writable } from "svelte/store";

const savedPlayers =
  JSON.parse(localStorage.getItem("players")) || [
    { id: 1, name: "Magnus Carlsen", rating: 2850 },
    { id: 2, name: "Hikaru Nakamura", rating: 2780 }
  ];

export const players = writable(savedPlayers);

players.subscribe((value) => {
  localStorage.setItem("players", JSON.stringify(value));
});