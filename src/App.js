import "./App.css";
import PortfolioContainer from "./PfContainer";
import { useEffect, useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const userMode = localStorage.getItem("mode");
  if (!userMode) localStorage.setItem("mode", "light");
  useEffect(() => {
    setMode(userMode);
  }, [userMode]);
  const handleClick = (event) => {
    if (userMode === "light") {
      localStorage.setItem("mode", "dark");
      setMode("dark");
    } else {
      localStorage.setItem("mode", "light");
      setMode("light");
    }
  };
  return (
    <>
      <div className={`App ${mode}-theme`}>
        <PortfolioContainer mode={mode} toggleTheme={handleClick} />
      </div>
    </>
  );
}
export default App;
