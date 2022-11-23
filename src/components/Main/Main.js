import "./Main.css";
import Form from "../Form/Form";
import Entries from "../Entries/Entries";
import useLocalStorageState from "use-local-storage-state";
import { nanoid } from "nanoid";

const initialEntries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
    isFavourite: false,
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
    isFavourite: false,
  },
  {
    id: 998,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
    isFavourite: false,
  },
  {
    id: 997,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    notes: "My React-ion when I learned about React: 😍",
    isFavourite: false,
  },
];

export default function Main() {
  const [entries, setEntries] = useLocalStorageState("entries", {
    defaultValue: initialEntries,
  });

  function handleToggleFavourite(id) {
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, isFavourite: !entry.isFavourite } : entry
      )
    );
  }

  function handleCreateEntries(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    setEntries([
      { id: nanoid(), date, isFavourite: false, ...newEntry },
      ...entries,
    ]);
  }

  return (
    <main>
      <Form onCreateEntries={handleCreateEntries} />
      <Entries onToggleFavourite={handleToggleFavourite} entries={entries} />
    </main>
  );
}
