import { useEffect } from "react";
import jsonPanels from "./assets/panels.json";
import "./App.css";

function App() {
  let panels = [];

  useEffect(() => {
    panels = document.querySelectorAll(".panel");
  }, []);

  function removeActiveClasses(panels) {
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
  }

  function handleClick(event) {
    if (!panels) return;
    removeActiveClasses(panels);
    event.target.classList.add("active");
  }
  return (
    <div className="container">
      {jsonPanels.map((panel, index) => (
        <div
          style={{ backgroundImage: `url('${panel.img}')` }}
          className="panel"
          key={`$img-${index}`}
          onClick={handleClick}
        >
          <h3> {panel.title} </h3>
        </div>
      ))}
    </div>
  );
}

export default App;
