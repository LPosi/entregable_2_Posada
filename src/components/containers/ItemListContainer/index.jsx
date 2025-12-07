import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../assets/products";
import ItemList from "../../common/ItemList";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          categoryId
            ? products.filter((prod) => prod.category === categoryId)
            : products
        );
      }, 800);
    });

    getProducts.then((res) => setItems(res));
  }, [categoryId]);

  return (
    <>
      <h2>{categoryId ? `Categoría: ${categoryId}` : "Todos los productos"}</h2>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
