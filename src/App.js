import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import japan1 from "./kt/japan1.png";
import japan2 from "./kt/japan2.png";
import japan3 from "./kt/japan3.png";
import japan4 from "./kt/japan4.png";

function App() {
  return (
    <div className="App">
      <AliceCarousel autoPlay autoPlayInterval="2000">
        <div className="slides">
          <img src={japan1} className="sliderimg" />
          <p className="descr">early cranes of Japan</p>
        </div>
        <div className="slides">
          <img src={japan2} className="sliderimg" />
          <p className="descr">dawn over lake in Japan</p>
        </div>
        <div className="slides">
          <img src={japan3} className="sliderimg" />
          <p className="descr">Master Oogway in a different guise</p>
        </div>
        <div className="slides">
          <img src={japan4} className="sliderimg" />
          <p className="descr">Makazaki uprising</p>
        </div>
      </AliceCarousel>
    </div>
  );
}

export default App;
