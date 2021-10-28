import React from 'react';
import Profile from "./pages/profile";
import Preview from "./pages/preview";
import {Route, Switch} from "react-router-dom";
import PageNotFound from "./pages/not-found";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
    return (
        <>
            <Header/>
            <Switch>
                <Route path='/' exact>
                    <Profile/>
                </Route>
                <Route path='/preview' exact>
                    <Preview/>
                </Route>
                <Route>
                    <PageNotFound/>
                </Route>
            </Switch>
            <Footer/>
        </>
    );
}

export default App;
