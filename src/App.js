import "./App.css";
import paul from "./images/paul.JPG";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Image } from "react-bootstrap";

function App() {
  return (
    <Card style={{ width: "80px" }}>
      <Card.Img variant="bottom rounded" src={paul} />
    </Card>
  );
}

export default App;
