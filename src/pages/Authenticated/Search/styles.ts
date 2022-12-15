import styled from "styled-components";

interface ButtonProps {
  action: string;
}

function returnButtonColor(action: string) {
  switch (action) {
    case "view":
      return "#313EB1";
    case "edit":
      return "var(--primary)";
    case "delete":
      return "#FF5E5E";
  }
}

export const CardTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  button {
    margin: 0 0 0 15px;
  }
`;

export const Table = styled.table`
  width: 100%;

  border-collapse: separate;
  border-spacing: 0px !important;

  tr {
    th,
    td {
      border-top: 1px solid #a9a9a9;
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
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;

      color: #000000;
    }
  }
`;

export const Button = styled.button<ButtonProps>`
  width: 27px;
  height: 27px;

  padding: 0 !important;

  border: none;
  outline: none;
  color: white;

  font-size: 15px;

  cursor: pointer;

  border-radius: 100%;

  margin: 0 2px 0 2px;

  background-color: ${(props) => returnButtonColor(props.action)};

  svg {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: row;
  }
`;
