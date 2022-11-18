import "./Form.css";
import Input from "./Input";

export default function Form() {
  return (
    <form>
      <p className="Form__p">NEW ENTRY - TODAY, FEB 28, 2028</p>
      <fieldset>
        <Input id="motto" rows="1">
          Motto
        </Input>
        <Input id="notes" rows="4">
          Notes
        </Input>
      </fieldset>
      <button type="submit">Create</button>
    </form>
  );
}
