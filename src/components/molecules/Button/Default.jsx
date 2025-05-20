import React from "react";
import { Container } from "../../atoms";
import Typographie from "../../atoms/Typographie";

const Default = (props) => {
  return (
    <button onClick={() => props.setPage(props.children)} className="button">
      <Typographie.Paragraph>{props.children}</Typographie.Paragraph>
    </button>
  );
};

export default Default;
