import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./pages/Main/Main";
import Shop from "./pages/Shop/Shop";
import ItemDetail from "./pages/Shop/Components/ItemDetail/ItemDetail"
import ItemReviewList from "./pages/Shop/Components/ItemDetail/Components/ItemReviewList/ItemReviewList";
import Footer from "./components/Footer/Footer";

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/shop" component={Shop} />
                    <Route exact path="/shop/1" component={ItemDetail} />
                    <Route exact path="/Footer" component={Footer} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;
