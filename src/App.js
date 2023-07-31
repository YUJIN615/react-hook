import { useEffect, useRef, useState } from "react";
import useAxios from "./react-hooks/useAxios";

function App() {
  const { loading, data, error, reFetch } = useAxios({url: "https://yts.mx/api/v2/list_movies.json"});
  console.log(loading, data, error)
  return (
    <div className="App">
      <h1>Hi</h1>
      <p>{loading && "loading..."}</p>
      <button onClick={reFetch}>Refetch</button>
    </div>
  );
}

export default App;
