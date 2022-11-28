import "./StatusBar.css";

export default function StatusBar({
  onShowAllEntries,
  onShowFavoriteEntries,
  filter,
  allEntriesCount,
  favoriteEntriesCount,
}) {
  return (
    <section className="StatusBar__section">
      <button
        type="button"
        className="StatusBar__div"
        onClick={onShowAllEntries}
      >
        All Entries
        <span
          className={`StatusBar__count ${
            filter === "all" && "StatusBar__count--active"
          }`}
        >
          {allEntriesCount}
        </span>
      </button>
      <button
        type="button"
        className="StatusBar__div"
        onClick={onShowFavoriteEntries}
      >
        Favourites
        <span
          className={`StatusBar__count ${
            filter === "favorite" && "StatusBar__count--active"
          }`}
        >
          {favoriteEntriesCount}
        </span>
      </button>
    </section>
  );
}
