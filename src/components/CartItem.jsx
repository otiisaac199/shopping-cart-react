import { useState, useEffect } from "react";
import { products } from "../products";

const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const findDetail = products.filter(
      (product) => product.id === productId
    )[0];
    setDetail(findDetail);
  }, [productId]);
  console.log(detail);

  return (
    <div className="flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md">
      <img src={detail.image} alt="" className="w-12" />
      <h3>{detail.name}</h3>
      <p>${detail.price * quantity}</p>
      <div className="w-20 flex justify-between">
        <button>-</button>
        <span>{quantity}</span>
        <button>+</button>
      </div>
    </div>
  );
};

export default CartItem;
