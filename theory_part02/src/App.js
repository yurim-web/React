import { useEffect, useState } from "react";
import Book from "./Book";
import Image from "./Image";
import { FadeLoader } from "react-spinners";

function App() {
  // 컴포넌트가 그려진 이후에
  // side effect[부수효과]를 처리하기 위해서 사용함!
  // 부수효과 : 데이터 가져오기, 타이머설정, 로컬저장

  // const [books, setbooks] = useState([]);

  // useEffect(() => {
  //   fetch("https://fakerapi.it/api/v2/books?_quantity=5")
  //     .then((res) => res.json())
  //     .then((v) => setbooks((prev) => [...v.data]));
  // }, []);

  const [image, setimage] = useState([]);
  const [test, settest] = useState(false);

  useEffect(() => {
    fetch(
      "https://fakerapi.it/api/v2/images?_quantity=10&_type=any&_height=300"
    )
      .then((res) => res.json())
      .then((v) => setimage((prev) => [...v.data]));
  }, [test]);
  return (
    <div className="App">
      <button onClick={() => settest(true)}>로켓 클릭클릭</button>
      {/* {books.map((v) => (
        <Book {...v} />
      ))} */}

      {image.map((v, i) => (
        <Image key={i} {...v} />
      ))}
    </div>
  );
}

export default App;
