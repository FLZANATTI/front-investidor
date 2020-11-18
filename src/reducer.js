import { combineReducers } from "redux";
import { carteiraReducer } from './Pages/Dashboard/redux';
import { acaoReducer } from './Containers/ComprarAcao/Redux';

export default combineReducers({
  carteiraReducer,
  acaoReducer
  // acoes
});
