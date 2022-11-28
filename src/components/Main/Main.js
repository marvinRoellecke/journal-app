import "./Main.css";
import Form from "../Form/Form";
import Entries from "../Entries/Entries";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { nanoid } from "nanoid";

const initialEntries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
    isFavorite: false,
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
    isFavorite: false,
  },
  {
    id: 998,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
    isFavorite: false,
  },
  {
    id: 997,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    notes: "My React-ion when I learned about React: 😍",
    isFavorite: false,
  },
];

export default function Main() {
  const [entries, setEntries] = useLocalStorageState("entries", {
    defaultValue: initialEntries,
  });
  const [filter, setFilter] = useState("all");
  const favoriteEntries = entries.filter((entry) => entry.isFavorite);

  function handleShowFavoriteEntries() {
    setFilter("favorite");
  }

  function handleShowAllEntries() {
    setFilter("all");
  }

  function handleToggleFavorite(id) {
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, isFavorite: !entry.isFavorite } : entry
      )
    );
  }

  function handleCreateEntries(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    setEntries([
      { id: nanoid(), date, isFavorite: false, ...newEntry },
      ...entries,
    ]);
  }

  return (
    <main>
      <Form onCreateEntries={handleCreateEntries} />
      <Entries
        entries={filter === "all" ? entries : favoriteEntries}
        allEntriesCount={entries.length}
        favoriteEntriesCount={favoriteEntries.length}
        onToggleFavorite={handleToggleFavorite}
        onShowFavoriteEntries={handleShowFavoriteEntries}
        onShowAllEntries={handleShowAllEntries}
        filter={filter}
      />
    </main>
  );
}
