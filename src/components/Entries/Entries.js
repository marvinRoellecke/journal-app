import "./Entries.css";
import Card from "../Card/Card";
import StatusBar from "../StatusBar/StatusBar";
import { Fragment } from "react";
//import useLocalStorageState from "use-local-storage-state";

export default function Entries({ entries, onToggleFavourite }) {
  return (
    <section>
      <StatusBar />
      <div className="Entries__container">
        {entries.map((entry, index) => (
          <Fragment key={entry.id}>
            <Card
              onToggleFavourite={onToggleFavourite}
              isFavourite={entry.isFavourite}
              id={entry.id}
              date={entry.date}
              motto={entry.motto}
              notes={entry.notes}
            />
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
