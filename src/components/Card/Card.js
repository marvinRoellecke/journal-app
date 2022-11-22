import "./Card.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";
import { useState } from "react";

export default function Card({ date, motto, notes }) {
  const [isFavourite, setIsFavourite] = useState(false);

  function handleClick() {
    setIsFavourite(!isFavourite);
  }

  return (
    <section className="Card__section">
      <span className="Card__date">{date}</span>
      <div className="Card__title">
        <h2>"{motto}"</h2>
        <button onClick={handleClick} className="button__favourite">
          {isFavourite ? <StarFilled /> : <Star />}
        </button>
      </div>
      <article className="Card__article">{notes}</article>
    </section>
  );
}
