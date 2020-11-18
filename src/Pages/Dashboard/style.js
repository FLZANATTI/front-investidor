import styled from "styled-components";

const DashboardWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #e5e7e8;
  padding: 25px;

  .titulo {
    border-bottom: solid 1px;
    font-size: 30px;
    margin-bottom: 15px;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #4d4d4d;
  }
  .carteira {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .footer-carteira {
    display: flex;
    justify-content: space-around
  }
`;

export default DashboardWrapper;
