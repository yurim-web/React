const Check = (props) => {
  return (
    <div>
      <button onClick={props.change}>{props.ischeck ? "⭕" : "❌"}</button>
    </div>
  );
};

export default Check;
