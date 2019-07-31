import React from "react";
import webpackSvg from "Assets/webpack.svg";
import reactSvg from "Assets/react.svg";
import { IconsWrapper } from "./styled";

const IconsSection = () => (
  <IconsWrapper>
    <img className="logo" src={reactSvg} />
    <img className="logo" src={webpackSvg} />
  </IconsWrapper>
);

export default IconsSection;
