// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// import HomePage from "./containers/Hometemplate/HomePage";
// import AboutPage from "./containers/Hometemplate/AboutPage";
// import ListMoviePage from "./containers/Hometemplate/ListMoviePage";
import PageNotFound from "./containers/PageNotFound"
import HomeTemplate from "./containers/Hometemplate"
import AdminTemplate from "./containers/AdminTemplate"

// Component
// import NavbarHome from "./components/navbarHome"

//routes
import { routesHome, routeAdmin } from "./routes"

import {Route, Switch, withRouter} from "react-router-dom"
import AuthPage from './containers/AdminTemplate/AuthPage';
// import { render } from '../node_modules/@testing-library/react/types/index';

import { actTryLogin } from "./containers/AdminTemplate/AuthPage/modules/action"
import { connect } from "react-redux"
class App extends Component {

  showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return <HomeTemplate
          key={index}
          exact={item.exact}
          path={item.path}
          Component={item.component}
        />
      });
    }
  }

  showLayoutAdmin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return <AdminTemplate
          key={index}
          exact={item.exact}
          path={item.path}
          Component={item.component}
        />
      });
    }
  }

  componentDidMount(){
    // debugger;
    this.props.fetchTryLogin(this.props.history)
  }

  render() {
    return (
        <Switch>
          {/* Trang chủ - Localhost : 3000 - HomePage*/}
          {/* <Route path="/" exact component={HomePage} /> */}

          {/* Trang chủ - Localhost : 3000/about - AboutPage*/}
          {/* <Route path="/about" component={AboutPage} /> */}

          {/* Trang chủ - Localhost : 3000/list-movie - ListMoviePage*/}
          {/* <Route path="/list-movie" component={ListMoviePage} /> */}

          {this.showLayoutHome(routesHome)}
          {this.showLayoutAdmin(routeAdmin)}

          {/* AuthPage */}
          <Route path="/auth" component={AuthPage} />

          {/* PageNotFound - để cuối cùng*/}
          <Route path="" component={PageNotFound} />
        </Switch>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchTryLogin: (history) => {
      dispatch(actTryLogin(history))
    }
  }
}

const ConnectedComponent = connect(null, mapDispatchToProps)(App); // dùng withRouter để có được props History tại đây

export default withRouter(ConnectedComponent);
