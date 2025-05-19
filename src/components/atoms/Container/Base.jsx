import React from "react";
import { styled } from "styled-components";

const Base = styled.div`
  background-color: ${(props) => {
    return props.blocked ? "red" : props.bgColor;
  }};
  color: white;
`;

export default Base;
