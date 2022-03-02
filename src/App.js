import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [change, setChange] = useState("");
  const [wish, setWish] = useState([]);

  useEffect(() => {
    setWish(JSON.parse(localStorage.getItem("wish")));
  }, []);

  useEffect(() => {
    localStorage.setItem("wish", JSON.stringify(wish));
  }, [wish]);

  return (
    <div className="App">
      <h1>WishBox!!</h1>
      <form>
        <input
          value={change}
          type="text"
          onChange={(e) => setChange(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setWish((prevWish) => {
              setChange("");
              return [...prevWish, change];
            });
          }}
        >
          Add
        </button>
      </form>
      <div className="display">
        {wish.map((item) => (
          <li>{item}</li>
        ))}
      </div>
    </div>
  );
}
