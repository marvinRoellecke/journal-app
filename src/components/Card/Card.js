import "./Card.css";
import star from "./star-filled.svg";

export default function Card() {
  return (
    <section className="Card__section">
      <img src={star} alt="Star" />
      <span>FEB 28, 2028</span>
      <h2 className="star">"That's life in the city"</h2>

      <article>
        Lorem ipsum dolor sit amet, eam in graeci iriure imperdiet, ea novum
        inermis quo. Vidit iuvaret equidem ius ut. Ne nec dolor facete. Albucius
        offendit quo an, tation epicurei duo te, in veniam patrioque scribentur
        vis. Ad quo dolores assueverit, scripta insolens at eam. Integre
        assueverit concludaturque quo te, sit aliquip delectus dissentias in.
      </article>
    </section>
  );
}
