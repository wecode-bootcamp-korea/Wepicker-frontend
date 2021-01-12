import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./pages/Main/Main";
import Nav from "./components/Nav/Nav"

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/Nav" component={Nav} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;
