import styled from "styled-components";

const Paragraph = styled.p`
  color: ${(props) => (props.nightMode ? "white" : "black")};
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
  padding: 10px;
  background-color: ${(props) => (props.nightMode ? "black" : "white")};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) => (props.nightMode ? "gray" : "lightgray")};
    color: ${(props) => (props.nightMode ? "black" : "white")};
  }
`;
export default Paragraph;
