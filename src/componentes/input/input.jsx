import "./input.css";

export default function Input({ label, id, type = "text", required = false }) {
  return (
    <div className="campo">
      <label htmlFor={id}>
        {label} 
      </label>
      <input 
        type={type} 
        id={id} 
        required={required} 
      />
    </div>
  );
}
