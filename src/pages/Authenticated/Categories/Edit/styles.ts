import styled from "styled-components";

export const Container = styled.div`
  position: absolute;

  width: 100vw !important;
  left: 0vw !important;
  top: 100px;

  animation: normal;
  transition: 0.7s;

  z-index: -4;

  display: flex;
  justify-content: center;

  &.isOpen {
    width: 85vw !important;
    left: 15vw !important;
  }
`;

export const Content = styled.div`
  width: 95%;
  max-width: 1080px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;

  * {
    text-align: center;
  }

  button {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: 280px;
    margin: 0 auto 13px auto;
    border: none;
    outline: none;
    height: 35px;
    border-radius: 3px;
    color: white;
    cursor: pointer;
  }

  button[type="submit"] {
    background-color: var(--primary);
  }

  button.delete {
    background-color: #d72a2a;
  }

  input,
  textarea {
    margin-bottom: 30px;
    background: #f7f7f7;
    border: 1px solid #939393;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    text-align: left;
    padding: 10px 20px;
  }

  input::after,
  textarea::after,
  textarea:focus,
  input:focus {
    outline: none;
    border: 1px solid #939393;
  }

  input {
    height: 38px;
  }

  textarea {
    resize: vertical;
    height: 220px;
  }
`;

export const Button = styled.button``;
