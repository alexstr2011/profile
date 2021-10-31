import React from 'react';
import Profile from "./pages/profile/profile";
import Preview from "./pages/preview/preview";
import {Route, Switch} from "react-router-dom";
import PageNotFound from "./pages/not-found/not-found";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import styles from './App.module.css';

function App() {
    return (
        <>
            <Header/>
            <div className={styles.content}>
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
            </div>
            <Footer/>
        </>
    );
}

export default App;
