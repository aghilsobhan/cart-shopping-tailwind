import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigate = useNavigation();
  const isLoader = navigate.state === "loading";
  console.log(navigate);
  return (

    <div className="grid  h-screen grid-rows-[auto_1fr_auto]">
      {isLoader && <Loader />}
      <Header />
      <div className="overflow-scroll">
      <menu className=" max-w-3xl mx-auto">
        <Outlet />
      </menu>
        
      </div>
    
      <CartOverview />
    </div>
  );
}

export default AppLayout;
