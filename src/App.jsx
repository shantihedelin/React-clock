import Clock from "./Clock.jsx";
import Timer from "./Timer.jsx";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Clock city={"London"} timeZone={"Europe/London"} />
      <div className="timerContainer">
        <Timer startTime={500} />
        <Timer startTime={900} />
        <Timer startTime={300} />
      </div>
    </div>
  );
}

export default App;
