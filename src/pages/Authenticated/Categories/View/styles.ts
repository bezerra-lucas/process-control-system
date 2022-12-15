import styled from "styled-components";

export const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0 30px 0;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h2 {
    padding: 0;
    margin: 0;
  }

  button {
    margin: 0 0 0 15px;
  }
`;

export const Desc = styled.div`
  p {
    font-size: 12px;
    font-style: italic;
  }
`;

export const Table = styled.table`
  width: 100%;

  border-collapse: separate;
  border-spacing: 0px !important;

  tr {
    th,
    td {
      height: 42px;
    }

    th {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;

      color: #000000;

      text-align: left;
    }

    td {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;

      color: #000000;
    }
  }
`;
