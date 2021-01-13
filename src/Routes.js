import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./pages/Main/Main";
import Footer from "./components/Footer/Footer";

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/Footer" component={Footer} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;
