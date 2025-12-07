import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../assets/products";
import ItemDetail from "../../common/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getProduct = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === Number(id)));
      }, 800);
    });

    getProduct.then((res) => setItem(res));
  }, [id]);

  return <div>{item ? <ItemDetail {...item} /> : "Cargando..."}</div>;
};

export default ItemDetailContainer;
