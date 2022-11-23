import "./Entries.css";
import Card from "../Card/Card";
import StatusBar from "../StatusBar/StatusBar";
import { Fragment } from "react";
//import useLocalStorageState from "use-local-storage-state";

export default function Entries({ entries }) {
  /*const [entries, setEntries] = useLocalStorageState("entries", {
    defaultValue: [{ id: "", date: "", motto: "", notes: "" }],
  });*/

  //const newEntry = {motto: event.target.elements.motto.value, notes: event.target.elements.notes.value,}
  //setEntries([...entries, newEntry]) . //...entries nimm alle bisherigen entries , newEntry und hänge das neue an

  return (
    <section>
      <StatusBar />
      <div className="Entries__container">
        {entries.map((entry, index) => (
          <Fragment key={entry.id}>
            <Card date={entry.date} motto={entry.motto} notes={entry.notes} />
            {index === entries.length - 1 ? (
              ""
            ) : (
              <div className="Entries__divider"></div>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
