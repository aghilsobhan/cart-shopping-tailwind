import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
function Home() {
  const username=useSelector(state=>state.user.userName);
  return (
    <div className="mt-10 mb-10 text-center sm:my-16" >
      <h1 className=" text-xl font-semibold
      md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
        Straight out of the oven, straight to you.
        </span>
      </h1>
      {username==='' ?(<CreateUser/>):(<Button type="primary" to='/menu'>
{username}
      </Button>)}
    </div>
  );
}

export default Home;
