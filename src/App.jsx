import React from "react";
import style from "./styles.css";
import webpackSvg from "Assets/webpack.svg";
import { Header } from "Components";

const App = () => (
  <div>
    <Header />
    <img class="logo" src={webpackSvg} />
  </div>
);

export default App;
