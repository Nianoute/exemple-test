import styled from "styled-components";

const SubTitle = styled.h2`
  color: ${(props) => (props.nightMode ? "white" : "black")};
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  padding: 10px;
`;

export default SubTitle;
