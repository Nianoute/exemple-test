import styled from "styled-components";

const Link = styled.a`
  color: ${(props) => (props.nightMode ? "white" : "black")};
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) => (props.nightMode ? "black" : "white")};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) => (props.nightMode ? "gray" : "lightgray")};
    color: ${(props) => (props.nightMode ? "black" : "white")};
  }
`;

export default Link;
