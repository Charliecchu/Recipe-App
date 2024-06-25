import styled from "styled-components";

const Header = styled.div `
  // color: white;
  background-color: green;
  display: flex;
  // flex-direction: row;
  // align-items: center;
  padding: 15px;
  box-shadow: 0 3px 6px gray;
`;

const NameComponent = styled.div `
  display: flex;
  color: white;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
`;

export {Header, NameComponent};

