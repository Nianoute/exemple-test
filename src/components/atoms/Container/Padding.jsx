import React from "react";
import { styled } from "styled-components";

const Padding = styled.div`
  background-color: ${(props) => {
    return props.blocked ? "red" : props.bgColor;
  }};

  padding: ${(props) => props.padding || "20px"};
`;

export default Padding;
