import React from 'react';
import {Provider as StyletronProvider, DebugEngine} from "styletron-react";
import {Client as Styletron} from "styletron-engine-atomic";
import HomePage from "../../pages/HomePage/HomePage";
import ProductPage from "../../pages/ProductPage/ProductPage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ShopProvider from "../../context/shopContext";
import Navbar from "../Navbar/Navbar";
import Cart from "../Cart/Cart";


const engine = new Styletron();
const debug =
    process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const App = () => {
    return (
        <ShopProvider>
            <StyletronProvider value={engine} debug={debug} debugAfterHydration>
                <Router>
                    <Navbar/>
                    <Cart/>
                    <Switch>
                        <Route path='/product/:id' exact>
                            <ProductPage/>
                        </Route>

                        <Route path='/'>
                            <HomePage/>
                        </Route>
                    </Switch>
                </Router>
            </StyletronProvider>
        </ShopProvider>
    );
};

export default App;