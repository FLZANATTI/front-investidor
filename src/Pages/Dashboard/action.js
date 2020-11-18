import axios from "axios";

const BASE_URL = "http://localhost:3500";

export async function buscarCarteiras() {
  return (dispatch) => {
     axios.get(`${BASE_URL}/carteira`).then((response) => {
      dispatch({
        type: "BUSCAR_CARTEIRAS",
        payload: response.data
      });
    });
  };
}

export async function cadastrarCarteira(nome) {
    return (dispatch) => {
       axios.post(`${BASE_URL}/carteira`, {
           Nome: nome
       }).then((response) => {
        dispatch({
          type: "CADASTRA_CARTEIRA",
          payload: response.data
        });
      });
    };
  }

  export async function buscaAcoesCarteira(nomeCarteira) {
    return (dispatch) => {
       axios.get(`${BASE_URL}/carteira/busca-acoes/${nomeCarteira}`).then((response) => {
        dispatch({
          type: "BUSCA_ACOES_CARTEIRA",
          payload: response.data
        });
      });
    };
  }
