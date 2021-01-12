import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./pages/Main/Main";
import Shop from "./pages/Shop/Shop"

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/shop" component={Shop} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;
