import { useState } from "react";
import Check from "./Check";
import Input from "./Input";

function App() {
  const [first, setfirst] = useState(false);
  const changeone = () => setfirst((prev) => !prev);

  const [second, setsecond] = useState(false);
  const changetwo = () => setsecond((prev) => !prev);

  const [third, setthird] = useState(false);
  const changethree = () => setthird((prev) => !prev);

  const [ispass, setispass] = useState(false);

  const inputchange = (e) => {
    const length = e.target.value.length;
    if (length > 4 && length < 11) {
      setispass((prev) => true);
    } else {
      setispass((prev) => false);
    }
  };

  return (
    <>
      <Input input={inputchange} />
      <Check ischeck={first} change={changeone} />
      <Check ischeck={second} change={changetwo} />
      <Check ischeck={third} change={changethree} />
      <button>{first && second && third && ispass ? "합격" : "불합격"}</button>

      {/* 인풋 4~10  */}
      {/* 버튼: o x */}
      {/* 버튼: o x */}
      {/* 버튼: o x */}
      {/* 버튼: 합/불 */}
    </>
  );
}
export default App;
