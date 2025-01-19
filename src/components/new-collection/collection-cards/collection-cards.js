import "./collection-cards.css";

const Cards = ({ image, title, sub_title, price }) => {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{
          background: "url('" + image + "')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="card-title">{title}</div>
      <div className="card-sub">{sub_title}</div>
      <div className="card-price">${price}</div>
    </div>
  );
};

export default Cards;
