import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {Container} from "react-bootstrap";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Nature} from "./pages/Nature";
import {Creature} from "./pages/Creature";
import {NavBarComponent} from "./components/NavBar.component";
import React from "react";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBarComponent/>
                <Container className={"mb-4"}>
                    <Routes>
                        <Route path={'/photo-view-function/'} element={<Home/>}></Route>
                        <Route path={'/photo-view-function/nature'} element={<Nature/>}></Route>
                        <Route path={'/photo-view-function/creature'} element={<Creature/>}></Route>
                    </Routes>
                </Container>
            </BrowserRouter>
        </div>
    );
}

export default App;
