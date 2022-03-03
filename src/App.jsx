import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import path from "./services/routerPath.json";
import CardImg from "./images/cardImg.png";
import smallImg from "./images/smallCardImg.png";
import CardSection from "./components/CardSection/CardSection";

class App extends Component {
  render() {
    return (
      <>
        <CardSection
          color="green"
          title="Лучше понимать себя"
          description="Архетипы дают четкое понимание своих сильных и слабых сторон, ответ на вопросы, где брать мотивацию и ресурс, а так же подсвечивают вашу стратегию жизни."
          cardImg={CardImg}
        />
        <CardSection
          smallRectangular
          color="purple"
          title="Время"
          description="10 минут"
          cardImg={smallImg}
        />
      </>
    );
  }
}

export default App;
