import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  button {
    cursor: pointer;
  }

  .ant-drawer-header {
    background: ${(props) => props.theme.primary[0]};
    border-radius: 0;
    .ant-drawer-title {
      color: #fff;
    }
    .ant-drawer-close {
      color: #fff;
    }
  }
  .ant-input:hover {
    border-color: #6ED06E;
    border-right-width: 1px !important;
}

.ant-input:focus {
    border-color:  #6ED06E;
    border-right-width: 1px !important;
    outline: 0;
    -webkit-box-shadow: 0 0 0 2px rgba(110,208,110, 0.2);
    box-shadow: 0 0 0 2px rgba(110,208,110, 0.2);
}

`;

export default GlobalStyle;
