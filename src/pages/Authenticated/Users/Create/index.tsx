import React from "react";

import {
  Container,
  SubmitButton,
  InputGroup,
  Form,
  Wrapper,
} from "./../../../../global-styles";

const UserCreate: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Cadastrar Usuário</h1>

        <Form>
          <InputGroup>
            <label>Nome</label>
            <input type="text" />
          </InputGroup>
          <InputGroup>
            <label>E-mail</label>
            <input type="text" />
          </InputGroup>

          <InputGroup>
            <label>Vínculo Instituicional</label>
            <select>
              <option>Estudante</option>
              <option>Professor</option>
              <option>Colaborador da Diretoria de Ensino</option>
            </select>
          </InputGroup>
          <SubmitButton>CADASTRAR</SubmitButton>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default UserCreate;
