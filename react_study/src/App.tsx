import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Check from "./quiz/Check";

function App() {
  const [ischeckfirst, setischeckfirst] = useState(false);
  const [ischecksecond, setischecksecond] = useState(false);

  const changefirst = () => setischeckfirst((prev) => !prev);
  const changesecond = () => setischecksecond((prev) => !prev);

  // const [input, setinput] = useState(["", ""]);

  // const changefirst = (e: any) => {
  //   setinput((prev) => {
  //     const newarr = [...prev];
  //     newarr[0] = e.target.value;
  //     return newarr;
  //   });
  // };

  // const changesecond = (e: any) => {
  //   setinput((prev) => {
  //     const newarr = [...prev];
  //     newarr[1] = e.target.value;
  //     return newarr;
  //   });
  // };

  return (
    <div className="App">
      {/* <Input change={changefirst} placeholder="비밀번호 입력" />
      <Input change={changesecond} placeholder="비밀번호 입력 확인" />
      <button
        // onClick={() => {
        //   console.log(input);
        // }}
        style={{
          padding: "30px",
          backgroundColor: input[0] == input[1] ? "green" : "red",
          width: "fit-content",
        }}
      >
        확인
      </button>
      <Button /> */}
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <Check ischeck={ischeckfirst} change={changefirst} />
        <Check ischeck={ischecksecond} change={changesecond} />
        <button>{ischeckfirst && ischecksecond ? "합격" : "불합격"}</button>
      </div>
    </div>
  );
}

export default App;
