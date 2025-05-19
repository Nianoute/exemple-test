import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => (props.nightMode ? "white" : "black")};
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  padding: 10px;
  background-color: ${(props) => (props.nightMode ? "black" : "white")};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) => (props.nightMode ? "gray" : "lightgray")};
    color: ${(props) => (props.nightMode ? "black" : "white")};
  }
`;

export default Title;
