import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalPricequantity=useSelector(getTotalCartQuantity);
  const totalCartPrice=useSelector(getTotalCartPrice);
if(!totalPricequantity) return null;
  return (
    <div className="bg-stone-800
    flex items-center justify-between
     text-sm md:text-base text-stone-400 p-4 sm:px-6">
      <p className="text-stone-400 sm:space-x-6 uppercase
        font-semibold space-x-4">
        <span>{totalPricequantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
