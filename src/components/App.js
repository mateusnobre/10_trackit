import Login from './Login';
import SignUp from './SignUp';
import Today from './Today';
import Habits from './Habits';
import History from './History';
import React from 'react';
import { useState } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserContext from './contexts/UserContext';

export default function App() {
    const[userData,  setUserData] = useState({
        'name': 'John Doe',
        'image': 'john@mail.com',
        'password': '123',
        'token': 'None',
        'dailyProgress': 50
    });

    return(
        <UserContext.Provider value={{userData, setUserData}}>
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
        </UserContext.Provider>
    )
}