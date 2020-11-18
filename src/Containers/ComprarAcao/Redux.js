const INITIAL_STATE = {
    data: []
  };
  
  function buscarAcao(state, action) {
      debugger
      return {
        ...state,
        data: action.payload
      };
    }
    
  
  export function acaoReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "BUSCAR_ACAO":
        return buscarAcao(state, action);
      default:
        return state;
    }
  }
  