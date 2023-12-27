import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
      className="rounded-full px-4 py-2 
      text-sm
       placeholder:text-stone-400
      sm:w-64
      sm:focus:w-72
       transition-all duration-300
      focus:outline-none focus:ring
      focus:ring-yellow-500
      focus:ring-opacity-50 
      "
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
