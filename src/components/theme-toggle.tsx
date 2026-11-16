"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const eventName = "academic-theme-change";

function subscribe(onChange: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  function syncSystem() {
    try {
      const saved = localStorage.getItem("academic-theme");
      if (saved !== "light" && saved !== "dark") {
        document.documentElement.dataset.theme = media.matches ? "dark" : "light";
      }
    } catch {
      document.documentElement.dataset.theme = media.matches ? "dark" : "light";
    }
    onChange();
  }
  function syncStorage(event: StorageEvent) {
    if (event.key !== "academic-theme" && event.key !== null) return;
    const value = event.newValue;
    document.documentElement.dataset.theme = value === "light" || value === "dark" ? value : media.matches ? "dark" : "light";
    onChange();
  }
  window.addEventListener(eventName, onChange);
  window.addEventListener("storage", syncStorage);
  media.addEventListener("change", syncSystem);
  return () => {
    window.removeEventListener(eventName, onChange);
    window.removeEventListener("storage", syncStorage);
    media.removeEventListener("change", syncSystem);
  };
}

function getSnapshot() {
  return document.documentElement.dataset.theme === "dark";
}

export function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getSnapshot, () => false);
  function toggleTheme() {
    const value = dark ? "light" : "dark";
    document.documentElement.dataset.theme = value;
    try { localStorage.setItem("academic-theme", value); } catch { /* Preference still works for this page. */ }
    window.dispatchEvent(new Event(eventName));
  }
  return <button type="button" className="icon-button theme-toggle" onClick={toggleTheme} aria-label="Dark mode" aria-pressed={dark} title={dark ? "Switch to light mode" : "Switch to dark mode"}>
    {dark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
  </button>;
}
