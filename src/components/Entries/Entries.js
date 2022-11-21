import "./Entries.css";
import Card from "../Card/Card";
import StatusBar from "../StatusBar/StatusBar";

export default function Entries() {
  return (
    <section>
      <StatusBar />
      <div className="Entries__container">
        <Card />
        <div className="Entries__divider"></div>
        <Card />
        <div className="Entries__divider"></div>
        <Card />
      </div>
    </section>
  );
}
