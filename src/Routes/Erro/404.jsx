import React from "react";
import { Row, Col, Icon } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import ErroWrapper from "./Erro.Style";

const Erro404 = () => (
  <ErroWrapper>
    <Row>
      <Col span={12} className="left">
        <span className="icon-mob">
          <Icon type="warning" />
        </span>
        <h1>404</h1>
        <h2>Página não encontrada!</h2>
        <p>Clique abaixo para voltar a navegar</p>
      </Col>
      <Col span={12}>
        <span className="icon-desk">
          <FontAwesomeIcon icon={faPizzaSlice} />
        </span>
      </Col>
    </Row>
  </ErroWrapper>
);

export default Erro404;
