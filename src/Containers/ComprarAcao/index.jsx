import React from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Icon, Row, Col, Table } from "antd";
import { AutoComplete } from "antd";
import { buscarAcao, comprarAcao } from "./action";
import { formatReal } from "../../Utils/FuncitonUtils";
import { buscaAcoesCarteira } from "../../Pages/Dashboard/action";

const columns = [
  {
    title: "Ticker",
    dataIndex: "Ticker",
    key: "Ticker",
  },
  {
    title: "Nome",
    dataIndex: "Nome",
    key: "Nome",
  },
  {
    title: "Valor",
    dataIndex: "Valor",
    key: "Valor",
    render: (valor) => formatReal(valor),
  },
  {
    title: "Quantidade",
    dataIndex: "Quantidade",
    key: "Quantidade",
  },
  {
    title: "Total",
    key: "total",
    render: (row) => formatReal(row.Valor * row.Quantidade),
  },
];

class ComprarAcao extends React.Component {
  state = {
    value: "",
  };

  componentDidMount() {
    this.props.buscaAcoesCarteira(this.props.nomeCarteira);
  }

  onSearch = (searchText) => {
    this.props.buscarAcao(searchText);
  };

  onChange = (value) => {
    this.setState({ value });
  };

  onSelect = (value) => {
    this.setState({
      value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const dados = {
          tiker: this.state.value,
          nome: this.state.value,
          valor: values.valor,
          quantidade: values.quantidade,
          carteira: this.props.nomeCarteira,
        };
        this.props
          .comprarAcao(dados)
          .then(() => this.props.buscaAcoesCarteira(this.props.nomeCarteira));
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <React.Fragment>
        <Row type="flex" gutter={8}>
          <Col span={8}>
            <AutoComplete
              dataSource={this.props.acoes ? this.props.acoes.data : []}
              style={{ width: 215, marginTop: "4px" }}
              onSelect={this.onSelect}
              onSearch={this.onSearch}
              placeholder="Digite o Tiker"
            />
          </Col>
          <Col span={6}>
            <Form.Item>
              {getFieldDecorator("valor", {
                rules: [{ required: true, message: "Informa o valor" }],
              })(<Input placeholder="Valor" />)}
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item>
              {getFieldDecorator("quantidade", {
                rules: [
                  { required: true, message: "Informa a quantidade de acoes" },
                ],
              })(<Input placeholder="Quantidade" />)}
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item>
              <Button type="primary" onClick={this.handleSubmit}>
                Comprar
              </Button>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table
              pagination={false}
              dataSource={this.props.acoesCompradas.acoes}
              columns={columns}
              //   rowKey={(x) => x}
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    acoes: state.acaoReducer.data,
    acoesCompradas: state.carteiraReducer.acoes,
  };
};

export default connect(mapStateToProps, {
  buscarAcao,
  buscaAcoesCarteira,
  comprarAcao,
})(Form.create()(ComprarAcao));
