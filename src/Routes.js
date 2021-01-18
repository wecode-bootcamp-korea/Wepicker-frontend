import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Sidebar from './components/Nav/SideBar';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Nav} />
                    <Route exact path="/Sidebar" component={Sidebar} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;
