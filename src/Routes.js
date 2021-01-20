import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import EmptyCart from "./pages/Cart/EmptyCart";
import FilledCart from "./pages/Cart/FilledCart";
import CartItemList from "./pages/Cart/CartItemList";

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={EmptyCart} />
                    <Route exact path="/Filled" component={FilledCart} />
                    <Route exact path="/CartItem" component={CartItemList} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;
