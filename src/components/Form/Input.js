import "./Input.css";

export default function Input({ id, rows, children }) {
  return (
    <div className="Input__label">
      <label htmlFor={id}>{children}</label>
      <textarea id={id} name={id} rows={rows} />
    </div>
  );
}
