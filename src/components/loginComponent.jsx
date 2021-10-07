import React, { Component } from 'react';

class LoginBox extends Component {
    LogIn(e){
        console.log("Login bajo construcción");
    }

    render() { 
        return(
            <div className="inner-container">
                <div className="extra-container">
                    <div className="input-group">
                        <label htmlFor="passwornd">
                            Login
                        </label>
                    </div>
                    <div className="box">
                        <div className="input-group">
                            <input type="text" className="log-input" name="username" placeholder="Usuario" />
                        </div>

                        <div className="input-group">
                            <input type="password" className="log-input" name="password" placeholder="Contraseña" />
                        </div>
                        
                        <div className="input-group">
                            <button type="button" className="login-btn btn btn-primary" onClick={this.LogIn}>
                                Ingresar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default LoginBox;