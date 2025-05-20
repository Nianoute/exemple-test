import React from "react";
import { Container } from "../atoms";
import Typographie from "../atoms/Typographie";
import Default from "./Button/Default";

const Bonjour = () => {
  return (
    <Container.Base>
      <Typographie.Title>Night</Typographie.Title>
      <Typographie.Link>Nuit</Typographie.Link>
      <Typographie.Paragraph>Noche</Typographie.Paragraph>
      <Default />
    </Container.Base>
  );
};

export default Bonjour;
