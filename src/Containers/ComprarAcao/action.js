import axios from "axios";

const BASE_URL = "http://localhost:3500";

export async function buscarAcao(tiker) {
    debugger
  return (dispatch) => {
    axios.get(`${BASE_URL}/acoes/busca-acoes/${tiker}`).then((response) => {
      dispatch({
        type: "BUSCAR_ACAO",
        payload: response.data,
      });
    });
  };
}

export async function comprarAcao(dados) {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}/acoes/comprar`, {
        Ticker: dados.tiker,
        Nome: dados.nome,
        Valor: dados.valor,
        Quantidade: dados.quantidade,
        Carteira: dados.carteira,
      })
      .then((response) => {
        dispatch({
          type: "COMPRA_ACOES",
          payload: response.data,
        });
      });
  };
}
