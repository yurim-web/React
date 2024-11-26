const Input = (props) => {
  return (
    <>
      <input
        onChange={props.change}
        type="text"
        placeholder={props.placeholder}
        style={{
          width: "400px",
          height: "40px",
          display: "block",
          borderRadius: "7px",
          border: "1px solid lightgrey",
        }}
      ></input>
    </>
  );
};

export default Input;
