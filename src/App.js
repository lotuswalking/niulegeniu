import "./App.css";
import paul from "./images/paul.JPG";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      This is an App
      <img src={paul} alt="NoImg" />
    </div>
  );
}

export default App;
