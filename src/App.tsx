import React from 'react';
import Profile from "./pages/profile/profile";
import Preview from "./pages/preview/preview";
import {Route, Switch} from "react-router-dom";
import PageNotFound from "./pages/not-found/not-found";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

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
