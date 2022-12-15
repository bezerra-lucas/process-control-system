import React from "react";

import { Container } from "./../../../global-styles";
import { Wrapper, Left, Right, Charts } from "./styles";

import PieChart from "./../../../components/PieChart";
import BarChart from "./../../../components/BarChart";

const Reports: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Relatórios</h1>
        <Charts>
          <Left>
            <h2>Tamanho dos Arquivos por Categoria (em KB)</h2>
            <PieChart />
          </Left>
          <Right>
            <h2>Quantidade de Subcategorias por Categoria</h2>
            <BarChart />
          </Right>
        </Charts>
      </Wrapper>
    </Container>
  );
};

export default Reports;
