const Book = ({ image, title, description }) => {
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
      <img
        style={{ width: "100px", height: "100px", objectFit: "cover" }}
        src={image}
        alt=""
      />
      <h5>{title}</h5>
      <p>{description}</p>
    </article>
  );
};

export default Book;
