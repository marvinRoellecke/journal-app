import "./Card.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";
import { useState } from "react";

export default function Card() {
  const [isFavourite, setIsFavourite] = useState(false);

  function handleClick() {
    setIsFavourite(!isFavourite);
  }

  return (
    <section className="Card__section">
      <span className="Card__date">FEB 28, 2028</span>
      <div className="Card__title">
        <h2>"That's life in the city"</h2>
        <button onClick={handleClick} className="button__favourite">
          {isFavourite ? <StarFilled /> : <Star />}
        </button>
      </div>
      <article className="Card__article">
        Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si
        mihi.<br></br>Et quidem se repellere, idque instituit docere sic omne
        animal, simul atque.
      </article>
    </section>
  );
}
