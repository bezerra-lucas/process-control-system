import React from "react";

import { Container, Content } from "./styles";

import { FiX } from "react-icons/fi";

const Alert: React.FC = () => {
  return (
    <Container>
      <Content>
        <FiX size={23} />
        <h2>Cuidado!</h2>
        <p>
          Essa ação não pode ser revertida, se certifique de que não há erros.
        </p>
        <button>APAGAR MESMO ASSIM</button>
      </Content>
    </Container>
  );
};

export default Alert;
