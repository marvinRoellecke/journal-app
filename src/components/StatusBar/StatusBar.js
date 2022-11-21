import "./StatusBar.css";

export default function StatusBar() {
  return (
    <section className="StatusBar__section">
      <div className="StatusBar__div">
        <span>All Entries</span>
        <span className="StatusBar__allEntries">3</span>
      </div>
      <div className="StatusBar__div">
        <span>Favourites</span>
        <span className="StatusBar__favourites">1</span>
      </div>
    </section>
  );
}
