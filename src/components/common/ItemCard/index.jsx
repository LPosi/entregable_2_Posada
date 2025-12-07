const ItemCard = ({ id, title, price, image }) => {
  return (
    <div className="item-card">
      <h3>{title}</h3>
      <p>Precio: ${price}</p>
      <img src={image} alt={title} />
    </div>
  );
};

export default ItemCard;
