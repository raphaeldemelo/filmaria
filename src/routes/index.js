import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from '../components/Header';
import Home from './../pages/Home';
import Filme from './../pages/Filme';
import Favoritos from './../pages/Favoritos';
import PaginaErrada from '../pages/PaginaErrada';

export default function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/filme/:id" component={Filme} />
                <Route exact path="/favoritos" component={Favoritos} />
                <Route path="*" component={PaginaErrada} />
            </Switch>
        </BrowserRouter>
    );
}