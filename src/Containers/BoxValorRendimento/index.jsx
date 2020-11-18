import React from "react";
import { Row, Col } from "antd";
import BoxValorRendimentoWrapper from "./style";
import { formatReal } from "../../Utils/FuncitonUtils";

const BoxValorRendimento = ({ valorConta, valorInvestido, rendimento }) => (
  <BoxValorRendimentoWrapper>
    <Row type="flex" gutter={16}>
      <Col span={8}>
        <div className='valor-conta'>
          <span className="label">Valor em Conta</span>
          <span className="valor">{formatReal(valorConta)}</span>
        </div>
      </Col>
      <Col span={8}>
        <div className='valor-investido'>
          <span className="label">Valor Investido</span>
          <span className="valor"> {formatReal(valorInvestido)}</span>
        </div>
      </Col>
      <Col span={8}>
        <div className='valor-rendimento'>
          <span className="label">Rendimentos</span>
          <span className="valor"> {formatReal(rendimento)}</span>
        </div>
      </Col>
    </Row>
  </BoxValorRendimentoWrapper>
);

export default BoxValorRendimento;
