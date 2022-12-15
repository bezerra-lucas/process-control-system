import styled from "styled-components";

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
export const Container = styled.div``;
