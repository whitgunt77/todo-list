export default function TextInputWithLabel({ elementId, labelText, onChange, value }) {
  return (
    <>
      <label className="todoTitle" htmlFor={elementId}>{labelText}</label>
      <input
        className="todoInput"
        type="text"
        id={elementId}
        value={value}
        onChange={onChange}
      />
    </>
  );
}