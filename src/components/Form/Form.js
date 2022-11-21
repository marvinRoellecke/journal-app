import "./Form.css";
import Input from "./Input";

export default function Form() {
  return (
    <form>
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
