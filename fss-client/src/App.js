import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from "./store";
import Provider from "react-redux/lib/components/Provider";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from "./components/common/Layout";
import Home from "./hocs/Home";

function App() {
  return (
    <Provider store={store}>
        <Layout>
        <Router>
          <Switch>
            <Route path="/">
                <Home/>
            </Route>
          </Switch>
        </Router>
        </Layout>
    </Provider>
  );
}

export default App;
