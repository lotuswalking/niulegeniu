import "./App.css";
import paul from "./images/paul.JPG";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Button type="button" class="btn btn-primary">
        Button
      </Button>
      This is an App
      <br />
      <img src={paul} alt="NoImg" />
    </div>
  );
}

export default App;
