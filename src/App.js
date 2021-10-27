import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home";
import Characters from "./views/Characters";
import Planets from "./views/Planets";
import Films from "./views/Films";
import UserPageTemplate from "./templates/UserPageTemplate";
import { paths } from "./utils/paths";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DetailsPage from "./views/DetailsPage";

const App = () => (
  <BrowserRouter>
    <UserPageTemplate>
      <ToastContainer position="bottom-left" />
      <Navbar />
      <Switch>
        <Route exact path={paths.home}>
          <Home />
        </Route>
        <Route path={paths.characters}>
          <Characters />
        </Route>
        <Route path={paths.planets}>
          <Planets />
        </Route>
        <Route path={paths.films}>
          <Films />
        </Route>

        <Route path={paths.details(":type", ":id")}>
          <DetailsPage url="https://swapi.dev/api/" />
        </Route>
      </Switch>
    </UserPageTemplate>
  </BrowserRouter>
);

export default App;
