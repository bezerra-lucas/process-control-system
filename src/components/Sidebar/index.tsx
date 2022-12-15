import React, { useState, useEffect } from "react";
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
  Background,
} from "./styles";

import { FaUser } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";

import { getAuth, signOut } from "firebase/auth";

import {
  useSidebarContext,
  useSidebarUpdateContext,
} from "./../../contexts/SidebarContext";

import { firebaseApp } from "./../../firebase";

const auth = getAuth(firebaseApp);

import Login from "./../Login";

const Sidebar: React.FC = () => {
  const sidebarContext = useSidebarContext();
  const toggleSidebar = useSidebarUpdateContext();

  const [login, updateLogin] = useState(false);

  return (
    <>
      <Login isOpen={login} />
      <Container className={sidebarContext ? "active" : "inactive"}>
        <ContainerContent>
          <UserInfo>
            <Icon>
              <FaUser />
            </Icon>
            <Name>Administrador</Name>
            <Email>{auth.currentUser?.email}</Email>
          </UserInfo>
          <Navmenu>
            <NavUp>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/categorias/cadastrar">Cadastrar Categoria</a>
              </li>
              <li>
                <a href="/subcategorias/cadastrar">Cadastrar Subcategoria</a>
              </li>
              <li>
                <a href="/relatorios">Relatórios</a>
              </li>
            </NavUp>
            <NavDown>
              <li>
                <a href="/usuarios/cadastrar">Cadastrar Usuário</a>
              </li>
              <li>
                <a
                  href="/"
                  onClick={() => {
                    signOut(auth);
                  }}
                >
                  Sair
                </a>
              </li>
            </NavDown>
          </Navmenu>
        </ContainerContent>
      </Container>
      <ToogleSidebar
        className={sidebarContext ? "active" : "inactive"}
        onClick={toggleSidebar.toggleSidebarState}
      >
        <IconToogleSidebar className={sidebarContext ? "active" : "inactive"}>
          <FiArrowLeft className={sidebarContext ? "active" : "inactive"} />
        </IconToogleSidebar>
      </ToogleSidebar>
      <Background
        className={login ? "visible" : "invisible"}
        onClick={() => {
          updateLogin(false);
        }}
      />
    </>
  );
};

export default Sidebar;
