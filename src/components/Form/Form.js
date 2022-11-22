import "./Form.css";
import Input from "./Input";

export default function Form({ onCreateEntries }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target.elements;
    const motto = form.motto.value;
    const notes = form.notes.value;
    onCreateEntries(motto, notes);
    event.target.reset();
    form.motto.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="Form__title">New Entry - Today, FEB 28, 2028</p>

      <fieldset>
        <Input id="motto" rows="1">
          Motto
        </Input>
        <Input id="notes" rows="4">
          Notes
        </Input>
        <button type="submit" className="button__create">
          Create
        </button>
      </fieldset>
    </form>
  );
}
