import React from "react";
import { LocaleProvider } from "antd";
import ptBr from "antd/lib/locale-provider/pt_BR";
import ReactDOM from "react-dom";
import moment from "moment";
import GlobalStyle from "./Styles/GlobalStyle";
import PublicRoutes from "./Routes/Public";
import theme from "./Thema/Default";
import { ThemeProvider } from "styled-components";
import { store } from "./Store/CreateStore";
import { Provider } from "react-redux";

import "moment/locale/pt-br";
import "antd/dist/antd.css";

moment.locale("pt_BR");

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <LocaleProvider locale={ptBr}>
        <React.Fragment>
          <GlobalStyle />
          <PublicRoutes />
        </React.Fragment>
      </LocaleProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
