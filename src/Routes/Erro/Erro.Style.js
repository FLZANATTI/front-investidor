import styled from 'styled-components';

const ErroWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  .ant-row {
    width: 100%;
    .left {
      text-align: right;

      h1 {
        font-size: 60px;
        color: ${(props) => props.theme.cores.cinza};
        margin-bottom: 0;
      }
      button {
        width: 228px;
      }
    }

    .icon-desk {
      position: absolute;
      left: 43px;
      top: -45px;
      font-size: 180px;
      color: rgba(0, 0, 0, 0.15);
    }

    .icon-mob {
      display: none;
    }
  }

  @media (max-width: 780px) {
    .ant-row {
      .left {
        width: 100%;
        text-align: center;
        padding: 1rem;
      }

      .icon-desk {
        display: none;
      }

      .icon-mob {
        display: block;
        color: rgba(0, 0, 0, 0.15);
        font-size: 13rem;
      }
    }
  }

  @media (max-width: 300px) {
    button {
      width: 100% !important;
    }
  }
`;

export default ErroWrapper;
