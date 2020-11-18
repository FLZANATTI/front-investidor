import React from 'react';
import { Row, Col } from '../../Components/RowCol';
import { Icon } from '../../Components/Icons';
import ErroWrapper from './Erro.Style';
import Button from '../../Components/UI/Button';
import BrowserHistory from '../../Utils/BrowserHistory';

const Erro500 = () => (
  <ErroWrapper>
    <Row>
      <Col span={12} className="left">
        <span className="icon-mob">
          <Icon type="database" />
        </span>
        <h1>500</h1>
        <h2>Erro de Serivdor!</h2>
        <p>Clique abaixo para voltar a navegar</p>
        <Button type="primary" onClick={() => BrowserHistory.push('/login')}>
          voltar
        </Button>
      </Col>
      <Col span={12}>
        <span className="icon-desk">
          <Icon type="database" />
        </span>
      </Col>
    </Row>
  </ErroWrapper>
);

export default Erro500;
