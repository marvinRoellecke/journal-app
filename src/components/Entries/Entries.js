import "./Entries.css";
import Card from "../Card/Card";
import StatusBar from "../StatusBar/StatusBar";
import { Fragment } from "react";

export default function Entries({
  entries,
  allEntriesCount,
  favoriteEntriesCount,
  onToggleFavorite,
  onShowFavoriteEntries,
  onShowAllEntries,
  filter,
}) {
  return (
    <section>
      <StatusBar
        onShowAllEntries={onShowAllEntries}
        onShowFavoriteEntries={onShowFavoriteEntries}
        filter={filter}
        allEntriesCount={allEntriesCount}
        favoriteEntriesCount={favoriteEntriesCount}
      />
      <div className="Entries__container">
        {entries.map((entry, index) => (
          <Fragment key={entry.id}>
            <Card
              onToggleFavorite={onToggleFavorite}
              isFavorite={entry.isFavorite}
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
