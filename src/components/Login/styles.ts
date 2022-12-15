import styled from "styled-components";

export const Container = styled.div``;

export const Card = styled.div`
  cursor: default !important;
  position: fixed;

  width: 410px;
  height: 507px;

  padding: 50px;

  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #ffffff;
  box-shadow: 3px 4px 10px 2px rgba(0, 0, 0, 0.25);
  border-radius: 6px;

  form {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    img {
      width: 291px;
      margin: 0 auto 0 auto;
    }

    h1 {
      text-align: center;
    }

    .text_inputs {
      width: 100%;
      display: flex;
      flex-direction: column;
      div {
        width: 100%;
        margin: 8px;
      }
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;

      margin-bottom: 30px;

      svg {
        position: absolute;
        padding-left: 15px;
        color: #7c7c7c;
      }

      input[type="text"],
      input[type="password"] {
        width: 100%;
        height: 38px;

        color: #414141;
        padding-left: 43px;
        background: #f7f7f7;
        border: 1px solid #eaeaea;
        box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
      }

      input[type="text"].error,
      input[type="password"].error {
        border: 1px solid red;
      }

      label {
        cursor: pointer;
        font-size: 14px;
        margin-left: 8px;
      }

      input[type="checkbox"] {
        cursor: pointer;
        margin: 50px, 0;
        width: 16px;
        height: 16px;
      }
    }
  }

  button {
    width: 100%;
    color: white;
    font-weight: 700;
    height: 38px;
    background: var(--primary);
    border: 1px solid #939393;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    cursor: pointer;
  }
`;

export const Password = styled.div`
  margin-top: 14px;
  text-decoration: underline;
  font-style: italic;
  color: #577ee2;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  position: absolute;
  left: 0;
  top: 0%;

  cursor: pointer !important;

  display: flex;
  justify-content: center;
  align-items: center;

  &.visible {
    visibility: visible;
    opacity: 1;
  }

  &.invisible {
    visibility: hidden;
    opacity: 0;
    transition: opacity 1000ms;
  }
`;
