import styled from "styled-components";

const ButtonStyleWrapper = styled.div`
  padding: 10px;
  font-size: 16px;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  
  a {
    color: ${(props) => props.theme.primary[0]};
    :hover {
      color: ${(props) => props.theme.hoverColor[0]};
    }
  }
`;

export default ButtonStyleWrapper;
