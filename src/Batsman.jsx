import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);

  const handleSingle = () => {
    const updatedRuns = runs + 1;
    setRuns(updatedRuns);
  };
  const handleFours = () => {
    const hanldleFourRuns = runs + 4;
    setRuns(hanldleFourRuns);
  };
  const handleSix = () => {
    const hanldeSixRuns = runs + 6;
    const updatedSixes = sixes + 1;
    setSixes(updatedSixes);
    setRuns(hanldeSixRuns);
  };
  return (
    <div>
      <h2>Player: Bangla Batsman</h2>
      <p>
        <small>Six:{sixes}</small>
      </p>
      {runs > 50 && <p>Your Score:50</p>}

      <h2>Score: {runs}</h2>
      <button onClick={handleSingle}>Singles</button>
      <button onClick={handleFours}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}
