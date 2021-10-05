import React, { Component } from 'react';

class LoginBox extends React.Component {
    LogIn(e){

    }

    render() { 
        return(
            <div className="inner-container">
                <div className="box">
                    <div className="input-group">
                        <label htmlFor="username">
                            Usuario
                        </label>
                        <input type="text" name="username" placeholder="Usuario" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="passwornd">
                            Contraseña
                        </label>
                        <input type="password" name="password" placeholder="Contraseña" />
                    </div>
                    
                    <div className="input-group">
                        <button type="button" className="login-btn" onclick={this.LogIn(this)}>
                            Ingresar
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default LoginBox;