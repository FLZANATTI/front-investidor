import React from "react";
import { connect } from 'react-redux';
import { Form, Input, Button, Icon, Row, Col } from "antd";
import { cadastrarCarteira } from '../../Pages/Dashboard/action';

class CarteiraCadastro extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.cadastrarCarteira(values.nome);
        this.props.closeModal();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col span={20}>
            <Form.Item>
              {getFieldDecorator("nome", {
                rules: [
                  { required: true, message: "Informe um nome para Carteira" },
                ],
              })(
                <Input
                  prefix={
                    <Icon type="fund" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Nome Carteira"
                />
              )}
            </Form.Item>
          </Col>
          <Col span={3}>
            <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default connect(null, {
    cadastrarCarteira,
  })(Form.create()(CarteiraCadastro));
