import './Card.css'
const Card = (data) => {
  const { id, title, image, desc } = data;
  return (
    <div className="cards">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <img className="image" src={image} alt=""/>

      <div className="card-over">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;