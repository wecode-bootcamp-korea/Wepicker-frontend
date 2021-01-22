import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import CartPage from "./pages/Cart/CartPage";
import Shop from "./pages/Shop/Shop";
import ItemDetail from "./pages/Shop/Components/ItemDetail/ItemDetail"
import Login from "./pages/Login/Login";
import Agreement from "./pages/Agreement/Agreement";
import SignUp from "./pages/SignUp/SignUp";
import WishList from "./pages/Wish/WishList";

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/cart" component={CartPage} />
                    <Route exact path="/product/all" component={Shop} />
                    <Route exact path="/product/:id" component={ItemDetail} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/agreement" component={Agreement} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/wishlist" component={WishList} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;
