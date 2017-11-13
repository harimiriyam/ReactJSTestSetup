import React from "react";
import {HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./app-store";
import { MainApp } from "./main-app";

export default () => (
            <Provider store={store}>
            <div> 
            <Router>
              <Switch>
                  <Route path="*" component={MainApp}/>
              </Switch>
              </Router>
            </div>
          </Provider>
        );