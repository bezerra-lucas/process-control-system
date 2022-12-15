import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;

  z-index: 1100;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  position: fixed;
  z-index: 0;

  width: 100%;
  max-width: 470px;

  background-color: white;

  border-top: 9px solid #2bad3a;
  border-radius: 5px;

  padding: 14px 30px 20px 30px;

  svg {
    position: absolute;
    top: 15px;
    right: 35px;
    cursor: pointer;

    animation: normal;
    transition: 0.3s;

    color: #000000;

    &:hover {
      color: #b3b3b3;
    }
  }

  button {
    all: unset;

    color: white;
    background: #d41919;
    border: 1px solid #939393;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;

    padding: 6px 35px;

    cursor: pointer;

    float: right;

    animation: normal;
    transition: 0.3s;

    &:hover {
      background-color: #164014;
    }
  }
`;
