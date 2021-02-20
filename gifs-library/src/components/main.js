import React from 'react';
import {NavbarContainer as Navbar} from './shared/navbar.container'

const Main = (props) => (
    <>
    <Navbar/>        
    <div className="container">
        {props.children}
    </div>
    </>
)

export default Main

