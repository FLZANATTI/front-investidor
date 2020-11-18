import styled from "styled-components";

const BoxValorRendimentoWrapper = styled.div`
  .label {
    font-size: 20px;
    font-weight: 400;
    color: #fff;
  }
  .valor {
    font-size: 45px;
    font-weight: 700;
    color: #fff;
  }
  .valor-conta {
      display: flex;
      flex-direction: column; 
      background-color: #a1caa1;
      padding: 10px 20px 20px 10px;
  }
  .valor-investido {
      display: flex;
      flex-direction: column; 
      background-color: #a1aaca;
      padding: 10px 20px 20px 10px;
  }
  .valor-rendimento {
      display: flex;
      flex-direction: column; 
      background-color: #cabaa1;
      padding: 10px 20px 20px 10px;
  }
`;

export default BoxValorRendimentoWrapper;
