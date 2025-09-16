import "./App.css";
import Counter from "./Counter.jsx";
import Batsman from "./Batsman.jsx";

function App() {
  const handleClick = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };
  return (
    <>
      <h1>Vite + React</h1>
      <Batsman></Batsman>
      <Counter></Counter>

      <button onClick={() => handleClick(10)}>Click On Five</button>
    </>
  );
}

export default App;
