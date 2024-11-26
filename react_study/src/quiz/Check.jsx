const Check = (props) => {
  return (
    <div>
      <button onClick={props.change} style={{ border: "none" }}>
        {props.ischeck ? "✅" : "❌"}
      </button>
      <span style={{ color: props.ischeck ? "black" : "grey" }}>내용</span>
    </div>
  );
};

export default Check;
