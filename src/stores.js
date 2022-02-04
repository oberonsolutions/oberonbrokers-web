import { writable } from "svelte/store";

// Country Selection
const storedCountry = JSON.parse(localStorage.getItem("country"));
export const country = writable(storedCountry);
country.subscribe((value) => {
  localStorage.setItem("country", JSON.stringify(value));
});

// Language Selection
const storedLanguage = JSON.parse(localStorage.getItem("language"));
export const language = writable(storedLanguage);
language.subscribe((value) => {
  localStorage.setItem("language", JSON.stringify(value));
});