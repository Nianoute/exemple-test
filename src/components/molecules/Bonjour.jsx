import React from "react";
import { Container } from "../atoms";
import Typographie from "../atoms/Typographie";
import Default from "./Button/Default";

const Bonjour = () => {
  return (
    <Container.Base>
      <Typographie.Title>Heloo</Typographie.Title>
      <Typographie.Link>Hello</Typographie.Link>
      <Typographie.Paragraph>Helo</Typographie.Paragraph>
      <Default />
    </Container.Base>
  );
};

export default Bonjour;
