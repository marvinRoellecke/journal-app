import "./Card.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";

export default function Card({
  date,
  motto,
  notes,
  onToggleFavorite,
  isFavorite,
  id,
}) {
  return (
    <section className="Card__section">
      <span className="Card__date">{date}</span>
      <div className="Card__title">
        <h2>"{motto}"</h2>
        <button
          onClick={() => onToggleFavorite(id)}
          className="button__favorite"
        >
          {isFavorite ? <StarFilled /> : <Star />}
        </button>
      </div>
      <article className="Card__article">{notes}</article>
    </section>
  );
}
