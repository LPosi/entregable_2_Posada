function Button({ text, callback, type }) {
  return (
    <>
      <label htmlFor=""></label>
      <button onClick={callback} type={type}>
        {text}
      </button>
    </>
  );
}

export default Button;
