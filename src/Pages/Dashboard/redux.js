const INITIAL_STATE = {
  data: [],
  valorInvestido: 0,
  valorConta: 5000,
  valorRedimento: 0,
  acoes: []
};

function buscarCarteiras(state, action) {
  var valorInvestido = action.payload.data.reduce(function (
    valorInvestido,
    cart
  ) {
    return valorInvestido + cart.Valor;
  },
  0);

  var valorConta = 50000 - valorInvestido;

  return {
    ...state,
    data: action.payload.data,
    valorInvestido: valorInvestido,
    valorConta: valorConta,
  };
}

function cadastrarCarteira(state, action) {
    return {
      ...state,
      data: [...state.data, action.payload.carteira]
    };
  }

function buscaAcoesCarteira(state, action) {
    return {
      ...state,
      acoes: action.payload
    };
  }
  

export function carteiraReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "BUSCAR_CARTEIRAS":
      return buscarCarteiras(state, action);
    case "CADASTRA_CARTEIRA":
      return cadastrarCarteira(state, action);
    case "BUSCA_ACOES_CARTEIRA":
      return buscaAcoesCarteira(state, action);
    default:
      return state;
  }
}
