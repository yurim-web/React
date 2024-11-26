import { useEffect, useState } from "react";
import Image from "./Image";

function App() {
  // 유저에게 input으로 이미지 갯수 입력받고
  // 요청 버튼을 누르면
  //  faker api에서 받아온 데이터만큼 컴포넌트 만들기!
  //데이터 가져오는 동안에 스피너로 대체하기
  const [image, setimage] = useState([]);

  const [imgcount, setimagecount] = useState(0);
  const inputcount = (e) => {
    setimagecount(e.target.value);
  };
 
  const clickimage = () => {
    if (imgcount > 0) {
      fetch(
        `https://fakerapi.it/api/v2/images?_quantity=${imgcount}&_type=any&_height=300`
      )
        .then((res) => res.json())
        .then((v) => setimage((prev) => [...v.data]));
    }
  };

  // useEffect(() => {
  //   fetch(
  //     "https://fakerapi.it/api/v2/images?_quantity=10&_type=any&_height=300"
  //   )
  //     .then((res) => res.json())
  //     .then((v) => setimage((prev) => [...v.data]));
  // }, []);

  return (
    <div className="App">
      <input
        type="number"
        onChange={inputcount}
        placeholder="가져오고싶은 갯수를 입력하세요!"
      ></input>
      <button onClick={clickimage}>요청</button>

      {/* 받아온 이미지들을 렌더링 */}
      {image.map((v, i) => (
        <Image key={i} {...v} /> // 컴포넌트 Image 불러오기!!!!!
      ))}
    </div>
  );
}

export default App;
