import "./Card.css";
import star from "./star-filled.svg";

export default function Card() {
  return (
    <section className="Card__section">
      <span className="Card__date">FEB 28, 2028</span>
      <div className="Card__title">
        <h2>"That's life in the city"</h2>
        <img src={star} alt="Star" />
      </div>
      <article className="Card__article">
        Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si
        mihi.<br></br>Et quidem se repellere, idque instituit docere sic omne
        animal, simul atque.
      </article>
    </section>
  );
}
