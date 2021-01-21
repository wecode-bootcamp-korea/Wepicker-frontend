import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./pages/Main/Main";
import CartPage from "./pages/Cart/CartPage";
import CartItemList from "./pages/Cart/CartItemList";

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/Cart" component={CartPage} />
                    <Route exact path="/CartItem" component={CartItemList} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;
