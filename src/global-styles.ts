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

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);

  cursor: pointer;
`;

export const AlertWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  &.visible {
    display: block;

    visibility: visible;
    opacity: 1;
    transition: opacity 1000ms;
  }

  &.invisible {
    display: none;

    visibility: hidden;
    opacity: 0;
    transition: opacity 1000ms;
  }
`;

export const Main = styled.main`
  position: absolute;

  width: 100vw !important;
  left: 0 !important;
  top: 100px;

  animation: normal;
  transition: 0.7s;

  z-index: -10;

  display: flex;
  justify-content: center;

  &.isOpen {
    width: 85vw !important;
    left: 15vw !important;
  }
`;

export const Container = styled.div`
  width: 95%;
  max-width: 14 00px;
  padding: 0 30px 100px 30px;
  min-height: 100vh;
`;

export const Card = styled.div`
  margin: 20px;
  background: #fafafa;
  border-radius: 3px;

  box-shadow: 10px 10px 16px -2px rgba(0, 0, 0, 0.41);
  border: solid 1px rgba(0, 0, 0, 0.2);

  padding: 30px 50px 30px 50px;

  margin: 0 0 50px 0;
`;

export const SubmitButton = styled.button`
  all: unset;

  width: 80px;
  padding: 7px 40px;
  border-radius: 3px;

  margin: 20px auto;

  display: flex;
  justify-content: center;
  align-items: center;

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
`;

export const DeleteButton = styled.button`
  all: unset;

  width: 80px;
  padding: 7px 40px;
  border-radius: 3px;

  margin: 20px auto;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #d41919;

  color: white;

  cursor: pointer;

  animation: normal;
  transition: 0.5s;

  &:hover {
    background-color: #d41919;
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;

  max-width: 1000px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 20px;

  padding: 10px;

  label {
    margin-bottom: 10px;
  }

  input,
  textarea,
  select {
    all: unset;
    padding: 10px 16px;
    background: #f7f7f7;
    border: 1px solid #bbb;
    border-radius: 3px;

    &:focus {
      box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.4);
    }
  }

  select {
    background-image: linear-gradient(45deg, transparent 50%, gray 50%),
      linear-gradient(135deg, gray 50%, transparent 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;
    &:focus {
      background-image: linear-gradient(45deg, green 50%, transparent 50%),
        linear-gradient(135deg, transparent 50%, green 50%),
        linear-gradient(to right, #ccc, #ccc);
      background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em,
        calc(100% - 2.5em) 0.5em;
      background-size: 5px 5px, 5px 5px, 1px 1.5em;
      background-repeat: no-repeat;
      border-color: green;
      outline: 0;
    }

    &:-moz-focusring {
      color: transparent;
      text-shadow: 0 0 0 #000;
    }
  }

  textarea {
    resize: vertical;
    height: 70px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-items: center;
`;
