import "./App.css";
// import paul from "./images/paul.png";
// import dan from "./images/dan.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import ImgCard from "./components/ImgCard";
import React, { useEffect, useState } from "react";

function App() {
  const [urls, setUrls] = useState([]);
  const types = [
    "paul",
    "61",
    "jiang",
    "shili",
    "yz",
    "jiao",
    "paopao",
    "dan",
    "jagger",
    "hong",
  ];
  const fetchImg = async () => {
    let urls = [];

    types.forEach(async (e) => {
      const src = "./niulegeniu/images/" + e + ".png";
      urls.push(src);
    });
    setUrls(urls);

    // const imageBlob = await res.blob();
  };
  useEffect(() => {
    fetchImg();
  });
  return (
    <Container className="border border-5 border-primary">
      {/* <ImgCard img={paul} /> */}
      {urls.map((e) => (
        <ImgCard img={e} />
      ))}
    </Container>
  );
}

export default App;
