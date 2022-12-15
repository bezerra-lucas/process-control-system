import React, { useState } from "react";
import {
  Container,
  UserInfo,
  Name,
  Email,
  Navmenu,
  NavUp,
  NavDown,
  Icon,
  ContainerContent,
  ToogleSidebar,
  IconToogleSidebar,
  Logo,
  Search,
  Content,
  Navbar,
} from "./styles";

import { FaUser } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import logo from "./../../assets/images/logo-branco.png";
import { FaSearch } from "react-icons/fa";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  function toggleSidebar() {
    setIsOpen(false);
  }

  return (
    <div>
      <Navbar>
        <Content>
          <Logo src={logo} />
          <Search>
            <input
              type="text"
              placeholder="Procure pelo nome do processo / categoria / subcategoria"
            />
            <button>
              <FaSearch />
            </button>
          </Search>
          <span>Ambiente Virtual de Processos</span>
        </Content>
      </Navbar>
      <Container style={{ display: isOpen ? "fixed" : "none" }}>
        <ContainerContent>
          <UserInfo>
            <Icon>
              <FaUser />
            </Icon>
            <Name>Administrador</Name>
            <Email>joaodasilva@ifb.edu.br</Email>
          </UserInfo>
          <Navmenu>
            <NavUp>
              <li>
                <span>Home</span>
              </li>
              <li>
                <span>Criar Categoria</span>
              </li>
              <li>
                <span>Criar Subcategoria</span>
              </li>
              <li>
                <span>Relatórios</span>
              </li>
            </NavUp>
            <NavDown>
              <li>Cadastrar Usuário</li>
              <li>Sair</li>
            </NavDown>
          </Navmenu>
        </ContainerContent>
        <ToogleSidebar>
          <IconToogleSidebar onClick={() => toggleSidebar()}>
            <FiArrowLeft />
          </IconToogleSidebar>
        </ToogleSidebar>
      </Container>
    </div>
  );
};

export default Sidebar;
