// Import of all pages
import Search from "../pages/Authenticated/Search";

import CategoryCreate from "./../pages/Authenticated/Categories/Create";
import CategoryView from "./../pages/Authenticated/Categories/View";
import CategoryEdit from "./../pages/Authenticated/Categories/Edit";

import SubcategoryView from "./../pages/Authenticated/Subcategories/View";
import SubcategoryEdit from "./../pages/Authenticated/Subcategories/Edit";
import SubcategoryCreate from "./../pages/Authenticated/Subcategories/Create";

import UserCreate from "./../pages/Authenticated/Users/Create";

import Reports from "./../pages/Authenticated/Reports";

// Import of React Router Dom
import {
  BrowserRouter as Router,
  Routes as RoutesWrapper,
  Route,
  Navigate,
} from "react-router-dom";

import { Main } from "../global-styles";

import { useSidebarContext } from "../contexts/SidebarContext";

export function Routes() {
  const sidebarContext = useSidebarContext();

  return (
    <Main className={sidebarContext ? "isOpen" : ""}>
      <Router>
        <RoutesWrapper>
          <Route path="/categorias/cadastrar" element={<CategoryCreate />} />
          <Route path="/" element={<CategoryView />} />
          <Route
            path="/categorias/editar/:paramId"
            element={<CategoryEdit />}
          />

          <Route path="/subcategorias">
            <Route path="cadastrar" element={<SubcategoryCreate />} />
            <Route path="visualizar">
              <Route path=":id" element={<SubcategoryView />} />
            </Route>
            <Route path="editar/:paramId" element={<SubcategoryEdit />} />
          </Route>

          <Route path="/relatorios" element={<Reports />} />

          <Route path="/usuarios/cadastrar" element={<UserCreate />} />

          <Route path="/pesquisa/:query" element={<Search />} />

          <Route path="*" element={<CategoryView />} />
        </RoutesWrapper>
      </Router>
    </Main>
  );
}
