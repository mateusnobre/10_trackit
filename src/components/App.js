import Login from './Login';
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
    return(
        <BrowserRouter>
			<Switch>
				<Route path="/" exact>
                    <Login />
                </Route>
            </Switch>
		</BrowserRouter>
    )
}