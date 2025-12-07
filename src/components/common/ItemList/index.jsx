import ItemCard from "../ItemCard/index.jsx";

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((prod) => (
        <ItemCard key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
