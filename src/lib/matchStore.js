// @ts-nocheck

import { writable } from "svelte/store";

const stored =
  JSON.parse(
    localStorage.getItem("matches")
  ) || [];

export const matches =
  writable(stored);

matches.subscribe((value) => {
  localStorage.setItem(
    "matches",
    JSON.stringify(value)
  );
});