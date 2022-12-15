// Import of React Router Dom
import {
  BrowserRouter as Router,
  Routes as RoutesWrapper,
  Route,
} from "react-router-dom";

import CategoryViewWithCharts from "./../pages/Unknown/CategoryViewWithCharts";
import SubcategoryView from "./../pages/Unknown/SubcategoryView";

export function NotAuthedRoutes() {
  return (
    <Router>
      <RoutesWrapper>
        <Route path="/" element={<CategoryViewWithCharts />} />
        <Route
          path="/subcategorias/visualizar/:id"
          element={<SubcategoryView />}
        />{" "}
      </RoutesWrapper>
    </Router>
  );
}
