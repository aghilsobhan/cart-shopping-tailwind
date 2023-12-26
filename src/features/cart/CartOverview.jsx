import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-800
    flex items-center justify-between
     text-sm md:text-base text-stone-400 p-4 sm:px-6">
      <p className="text-stone-400 sm:space-x-6 uppercase
        font-semibold space-x-4">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
