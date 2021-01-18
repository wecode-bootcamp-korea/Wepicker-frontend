import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Agreement from "./pages/Agreement/Agreement";
import SignUp from "./pages/SignUp/SignUp";
import Footer from "./components/Footer/Footer";

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/agreement" component={Agreement} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/Footer" component={Footer} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;
