import { useState } from "react";
import { FadeLoader } from "react-spinners";

const Image = ({ url, title, description }) => {
  const [isloading, setisloading] = useState(true);
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        border: "1px solid black",
        borderRadius: "30px",
        padding: "10px 15px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      {isloading && <FadeLoader />}  
      {/* 둘다 true면 실행 */}
      <img
        style={{ width: "100px", height: "100px", objectFit: "cover" }}
        src={url}
        onLoad={() => setisloading(false)}
        alt=""
      />

      <h5>{title}</h5>
      <p>{description}</p>
    </article>
  );
};

export default Image;
