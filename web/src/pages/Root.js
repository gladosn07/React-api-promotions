import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PagesPromotionSearch from "./Promotion/Search/Search";
import PagesPromotionForm from "./Promotion/Form/Form";

const Root = () => {
    return (
        <Router>
            <Switch>
                <Route path='/create' component={PagesPromotionForm} exact/>
                <Route path='/edit/:id' component={PagesPromotionForm} exact/>
                <Route path='/' component={PagesPromotionSearch} />
            </Switch>
        </Router>
    )
}

export default Root