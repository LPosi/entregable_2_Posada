const ItemDetail = ({ id, title, description, price, image }) => {
  return (
    <div className="item-detail">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{description}</p>
      <h3>Precio: ${price}</h3>
    </div>
  );
};

export default ItemDetail;
