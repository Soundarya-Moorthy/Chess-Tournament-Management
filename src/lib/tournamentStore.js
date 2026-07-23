// @ts-nocheck

import { writable } from "svelte/store";

const stored =
  JSON.parse(localStorage.getItem("tournaments")) || [];

export const tournaments = writable(stored);

tournaments.subscribe((value) => {
  localStorage.setItem(
    "tournaments",
    JSON.stringify(value)
  );
});