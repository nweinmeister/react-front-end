import React, {Component} from 'react';
import LoginForm from '../components/LoginForm';
import 'whatwg-fetch';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    };
    handleLogin = () => {
        this.props.handleLogin(this.state.username, this.state.password);
    };
    handleUserFieldInput = (e) => {
        this.setState({username: e.target.value});
    };
    handlePasswordFieldInput = (e) => {
        this.setState({password: e.target.value});
    };


    render() {
        return (
            <MuiThemeProvider>
                <LoginForm
                    handleLogin={this.handleLogin}
                    handleUserFieldInput={this.handleUserFieldInput}
                    handlePasswordFieldInput={this.handlePasswordFieldInput}
                />
            </MuiThemeProvider>
        )
    }
}