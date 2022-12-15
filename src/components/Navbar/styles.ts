import styled from "styled-components";

export interface Props {
  left: number;
}

export const Results = styled.div<Props>`
  position: fixed;
  top: 72px;

  left: ${(p) => p.left}px;

  width: 545px;

  background-color: white;

  outline: 1px rgba(0, 0, 0, 0.2) solid;

  ul {
    padding: 0;
    width: 100%;
    margin: 0;

    li:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }

    li {
      cursor: pointer;
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 10px 20px;

      .name {
        font-weight: 700;
      }

      .type {
        font-weight: 300;
      }
    }
  }
`;

export const Container = styled.div`
  background-color: var(--primary);
  height: 65px;
  display: flex;
  align-items: center;

  position: fixed;
  width: 100vw;

  top: 0;
  left: 0;

  z-index: -2;

  &.isOpen {
    width: 85vw;
    left: 15vw !important;
  }

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
`;

export const Search = styled.form`
  display: flex;
  align-items: center;
  margin: 0 20px 0 20px;

  svg {
    position: absolute;
    margin-left: 14px;
  }

  input {
    border: none !important;
    outline: none;

    width: 500px;
    height: 38px;
    left: 528px;
    top: 12px;

    padding: 0 0 0 45px !important;

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
