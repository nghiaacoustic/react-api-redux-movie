import logo from './logo.svg';
import './App.css';
import HomePage from "./containers/Hometemplate/HomePage";
import AboutPage from "./containers/Hometemplate/AboutPage";
import ListMoviePage from "./containers/Hometemplate/ListMoviePage";
import PageNotFound from "./containers/PageNotFound";

// Component
import NavbarHome from "./components/navbarHome";

//routes
import { routesHome } from "./routes";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {

  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return <Route
          key={index}
          exact={item.exact}
          path={item.path}
          component={item.component}
        />
      });
    }
  }

  return (
    <BrowserRouter>
      <NavbarHome />
      <Switch>
        {/* Trang chủ - Localhost : 3000 - HomePage*/}
        {/* <Route path="/" exact component={HomePage} /> */}

        {/* Trang chủ - Localhost : 3000/about - AboutPage*/}
        {/* <Route path="/about" component={AboutPage} /> */}

        {/* Trang chủ - Localhost : 3000/list-movie - ListMoviePage*/}
        {/* <Route path="/list-movie" component={ListMoviePage} /> */}

        {showLayoutHome(routesHome)}

        {/* PageNotFound - để cuối cùng*/}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
