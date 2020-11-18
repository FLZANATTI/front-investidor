import styled from "styled-components";

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgba(226, 245, 226, 0.6);
  color: ${(props) => props.theme.primaryColor};

  .animation {
    display: flex;
    align-items: center;
    z-index: 9999999;
    justify-content: center;
    width: 100%;
    font-size: 40px;
    height: 100%;
    animation-iteration-count: infinite;
  }
`;

export default LoadingWrapper;
