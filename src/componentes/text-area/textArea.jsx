import "../input/input.css";

export default function Textarea({ label, id, required = false }) {
  return (
    <div className="campo">
      <label htmlFor={id}>
        {label}
      </label>
      <textarea id={id} required={required}></textarea>
    </div>
  );
}
