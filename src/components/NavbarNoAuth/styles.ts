import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--primary);
  height: 65px;
  display: flex;
  align-items: center;

  position: fixed;
  width: 100vw;

  top: 0;
  left: 0;

  z-index: 100;

  animation: normal;
  transition: 0.7s;

  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 14.0717px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #ffffff;

    margin: 0 0 0 auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 1080px;
  width: 100%;
  margin: auto;
`;

export const Logo = styled.img`
  height: 58px;

  margin: 0 auto 0 0;
`;

export const Search = styled.form`
  display: flex;
  align-items: center;
  margin: 0 20px 0 20px;

  button {
    height: 38px;
    width: 38px;

    outline: none;
    border: none;

    border-radius: 3px;

    background-color: #1c521a;

    color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 0 3px 3px 0;
  }

  button:hover {
    filter: brightness(0.8);
    cursor: pointer;
  }

  input {
    border: none !important;
    outline: none;

    width: 500px;
    height: 38px;
    left: 528px;
    top: 12px;

    padding: 0 0 0 16px !important;

    background: #f7f7f7;
    border: 1px solid #939393;
    border-radius: 3px 0 0 3px;
  }

  input:after,
  input:focus {
    border: none;
    outline: none;
  }
`;

export const LoginButton = styled.button`
  all: unset;
  height: 38px;
  padding: 0 40px;
  margin: auto 0 auto auto;
  border-radius: 3px;

  cursor: pointer;

  animation: normal;
  transition: 0.4s;

  font-weight: 700;

  border: solid white 2px;

  color: white;

  &:hover {
    background-color: white;
    color: black;
  }
`;
