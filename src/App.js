import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import {
  HashRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import AuthorPage from "./features/Author/AuthorPage";
import {
  StyledNavLink,
  NavigationItem,
  NavigationList,
  Navigation,
  Main,
} from "./styled";

export const App = () => (
  <HashRouter>
    <Navigation>
      <NavigationList>
        <NavigationItem>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </NavigationItem>
        <NavigationItem>
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </NavigationItem>
      </NavigationList>
    </Navigation>
    <Main>
      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
      </Switch>
    </Main>
  </HashRouter>
);
