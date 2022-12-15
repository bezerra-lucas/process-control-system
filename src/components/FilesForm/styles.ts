import styled from "styled-components";

export const Container = styled.div``;

export const AddFile = styled.div`
  float: right;
  margin-left: auto;

  label {
    all: unset;

    margin: 0 0 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 100%;

    background-color: var(--primary);

    color: white;

    cursor: pointer;

    animation: normal;
    transition: 0.5s;

    &:hover {
      background-color: #194717;
    }

    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  padding: 0 0 150px 0;
`;

export const Right = styled.div`
  width: 50%;

  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;
`;

export const Left = styled.div`
  width: 50%;
  min-height: 100%;
  height: 1000px;

  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;
`;

export const Information = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;

  width: 100%;

  * {
    margin: 15px 0;
  }
`;

export const Breadcrumb = styled.span`
  font-family: "Roboto";
  font-style: italic;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;

  a {
    text-decoration-line: underline;

    color: #577ee2;
  }
`;

export const Title = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
`;

export const Description = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;
export const Author = styled.a`
  font-family: "Roboto";
  font-style: italic;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-decoration-line: underline;

  color: #577ee2;
`;

export const Files = styled.div`
  margin: 45px 0 40px 0;
  background: #fafafa;
  border-radius: 3px;

  box-shadow: 10px 10px 16px -2px rgba(0, 0, 0, 0.41);
  border: solid 1px rgba(0, 0, 0, 0.2);

  padding: 40px 5% 40px 5%;

  width: 90%;

  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const FilesHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CardName = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
`;

export const Helper = styled.span`
  font-family: "Roboto";
  font-style: italic;
  font-weight: 400;
  font-size: 14px;

  color: #494949;
`;

export const FilesBody = styled.div`
  margin: 35px 0 0 0;
  font-size: 14px;

  table {
    width: 100%;
    border-collapse: collapse;
    thead {
      tr {
        th {
          height: 40px;
          text-align: left;
        }
      }
    }
    tbody {
      border-top: 1px solid rgba(0, 0, 0, 0.3);
      tr {
        cursor: pointer;

        &.checked {
          background-color: rgba(0, 0, 0, 0.3) !important;
        }

        &:hover {
          background-color: rgba(0, 0, 0, 0.04);
        }

        td {
          height: 40px;
        }
      }
    }
  }
`;

export const RightHeader = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px;

  overflow-y: hidden;
`;

export const VisualizationText = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;

  text-align: left;
`;

export const DownloadButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;

  padding: 5px 20px;
  margin: 0 0 0 auto;
  background: var(--primary);
  border-radius: 5px;

  color: white;

  cursor: pointer;

  animation: normal;
  transition: 0.5s;

  &:hover {
    background-color: #194717;
  }

  svg {
    margin-right: 7px;
  }
`;

export const Preview = styled.div`
  margin-top: 80px;
  position: absolute;
  width: 700px;
  overflow: auto;

  margin-bottom: 10px;

  canvas {
    width: auto;
    height: 200%;
  }
`;

export const Buttons = styled.div`
  width: 100%;

  & > button {
    all: unset;
    cursor: pointer;
    color: white;

    padding: 6px 30px;
    margin: 10px;
    font-weight: 700;
    border-radius: 4px;
  }
`;

export const AddButton = styled.input`
  background: var(--primary) !important;

  &:hover {
    background-color: #194717 !important;
  }
`;

export const RemoveButton = styled.button`
  background: #de3716 !important;

  &:hover {
    background-color: #7a1f0d !important;
  }
`;
