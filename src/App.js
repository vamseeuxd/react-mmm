import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {AppNavBar} from "./components/nav-bar";
import {AppSideBar} from "./components/side-bar";
import {MainContent} from "./components/main-content";

function App() {

    const [isOpen, setIsOpen] = useState(false);

    const onOpenClick = (isOpen) => {
        setIsOpen(isOpen);
    }
    return (
        <>
            <AppNavBar onOpenClick={onOpenClick}></AppNavBar>
            <div className="container-fluid">
                <div className="row">
                    <AppSideBar isOpen={isOpen}></AppSideBar>

                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Dashboard</h1>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <MainContent/>
                            </div>
                        </div>

                    </main>
                </div>
            </div>

        </>
    );
}

export default App;
