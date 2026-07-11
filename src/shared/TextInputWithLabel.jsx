function TextInputWithLabel({ elementId, labelText, onChange, ref, value }) {
  return (
    <>
      <label className="todoTitle" htmlFor={elementId}>{labelText}</label>
      <input
        className="todoInput"
        type="text"
        id={elementId}
        ref={ref}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default TextInputWithLabel;