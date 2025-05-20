import React from "react";
import { Container } from "../atoms";
import Typographie from "../atoms/Typographie";
import Default from "./Button/Default";

const Adieu = () => {
  return (
    <Container.Base>
      <Typographie.Title>GoodBye</Typographie.Title>
      <Typographie.Link>Adios</Typographie.Link>
      <Typographie.Paragraph>Adieu</Typographie.Paragraph>
      <Default />
    </Container.Base>
  );
};

export default Adieu;
