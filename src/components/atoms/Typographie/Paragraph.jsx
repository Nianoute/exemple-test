import styled from "styled-components";

const Paragraph = styled.p`
  color: ${(props) => (props.nightMode ? "white" : "black")};
  font-size: 12px;
  line-height: 1.5;
  margin: 0;
  padding: 10px;
`;
export default Paragraph;
