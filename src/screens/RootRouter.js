import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {SearchFilmsDash} from "./index";

function RootRouter(props) {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <SearchFilmsDash/>
                </Route>
            </Switch>
        </Router>
    );
}

export default RootRouter;