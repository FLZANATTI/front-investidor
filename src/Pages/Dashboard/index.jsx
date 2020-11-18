import React from "react";
import { connect } from "react-redux";
import { Row, Col, Card, Icon, Tooltip, Button, Modal } from "antd";
import CarouselCarteira from "../../Components/Carousel";
import DashboardWrapper from "./style";
import BoxValorRendimento from "../../Containers/BoxValorRendimento";
import { buscarCarteiras } from "./action";
import CarteiraCadastro from "../../Containers/CarteiraCadastro";
import ComprarAcao from "../../Containers/ComprarAcao";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalAcao: false,
      carteiraSelecionada: ""
    };
    // this.selecionaTipoOferta = this.selecionaTipoOferta.bind(this);
  }

  componentDidMount() {
    this.props.buscarCarteiras();
  }

  openModal = () => {
    this.setState({
      modal: true,
    });
  };

  closeModal = () => {
    this.setState({
      modal: false,
    });
  };

  openModalAcao = () => {
    this.setState({
      modalAcao: true,
    });
  };

  closeModalAcao = () => {
    this.props.buscarCarteiras();
    this.setState({
      modalAcao: false,
    });
  };

  selecionaCarteira = (nome) => {
    this.setState({
      carteiraSelecionada: nome
    },this.openModalAcao())
  }

  render() {
    console.log("carteiraSelecionada", this.state.carteiraSelecionada);
    return (
      <DashboardWrapper>
        <Card>
          <div className="titulo">Gerenciador de Carteiras de Investimento</div>
          <BoxValorRendimento
            valorConta={this.props.valorConta}
            valorInvestido={this.props.valorInvestido}
            rendimento={this.props.valorRedimento}
          />
          <br />
          <Row type="flex" justify="end">
            <Col span={24}>
              <div className="titulo">
                <span>Todas as Carteiras</span>
                <Tooltip title="Adicionar Carteira">
                  <Icon
                    onClick={() => this.openModal()}
                    style={{ fontSize: "26px", color: "#000" }}
                    type="plus-square"
                  />
                </Tooltip>
              </div>
            </Col>
          </Row>
          <Row>
            <div>
              <CarouselCarteira dataSource={this.props.carteiras} onClickCompraAcao={this.selecionaCarteira} />
            </div>
          </Row>
        </Card>
        <Modal
          visible={this.state.modal}
          onCancel={() => this.closeModal()}
          title="Cadastro de Carteira"
          destroyOnClose
          width={500}
          closable
          footer={false}
        >
          <CarteiraCadastro closeModal={this.closeModal} />
        </Modal>
        <Modal
          visible={this.state.modalAcao}
          onCancel={() => this.closeModalAcao()}
          title="Comprar Ações"
          destroyOnClose
          width={700}
          closable
          footer={false}
        >
          <ComprarAcao closeModal={this.closeModalAcao} nomeCarteira={this.state.carteiraSelecionada} />
        </Modal>
      </DashboardWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    carteiras: state.carteiraReducer.data,
    valorInvestido: state.carteiraReducer.valorInvestido,
    valorConta: state.carteiraReducer.valorConta,
    valorRedimento: state.carteiraReducer.valorRedimento,
  };
};

export default connect(mapStateToProps, {
  buscarCarteiras,
})(Dashboard);
