import React, { Component } from 'react';

class Navbar extends Component {
    render() { 
        return (
            <div className="sidenav">
                <a href="#section">
                    Inicio
                </a>
                <a href="#section">
                    Servicios
                </a>
                <a href="#section">
                    Salir
                </a>
            </div>
        );
    }
}
 
export default Navbar;