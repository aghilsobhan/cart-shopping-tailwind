import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <header className="flex item-center justify-between border-b 
     border-stone-200
     px-4 py-3 bg-yellow-400 uppercase
     sm:px-6
     ">
      <Link to="/" className="tracking-widest">Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Aghil</p>
      <UserName/>
    </header> 
  );
}

export default Header;
