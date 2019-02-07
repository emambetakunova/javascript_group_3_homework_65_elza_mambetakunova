import React from 'react';

import './Toolbar.css'
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = () => (
    <header className="Toolbar">
        <Logo/>
        <nav>
            <NavigationItems/>
        </nav>
    </header>

);

export default Toolbar;