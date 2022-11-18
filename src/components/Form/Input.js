import "./Input.css";

export default function Input({ id, rows, children }) {
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <textarea id={id} name={id} rows={rows} />
    </>
  );
}
