import CreateUser from "../features/user/CreateUser";
function Home() {
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
      <CreateUser/>
    </div>
  );
}

export default Home;
