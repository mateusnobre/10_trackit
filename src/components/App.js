import Login from './Login';
import SignUp from './SignUp';
import Today from './Today';
import Habits from './Habits';
import History from './History';
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
    return(
        <BrowserRouter>
			<Switch>
				<Route path="/" exact>
                    <Login />
                </Route>
                <Route path="/cadastro" exact>
                    <SignUp />
                </Route>
                <Route path="/hoje" exact>
                    <Today />
                </Route>
                <Route path="/habitos" exact>
                    <Habits />
                </Route>
                <Route path="/historico" exact>
                    <History />
                </Route>
            </Switch>
		</BrowserRouter>
    )
}