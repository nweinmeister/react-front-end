import React, {Component} from 'react';
import 'whatwg-fetch';
import './App.css';
import LoginPage from './containers/LoginPage';
import HomePage from './containers/HomePage';
import RequestBuilder from './helpers/RequestBuilder';

class App extends Component {
    constructor() {
        super();
        this.state = {
            verified: ''
        };
        let clientToken = localStorage.getItem('token');
        let clientUserID = localStorage.getItem('userID');
        console.log(clientToken);
        if (clientToken !== null && clientToken !== '') {
            this.verifyUserToken(clientUserID, clientToken);
        }
        else {
            this.state = {
                verified: false
            };
        }
    }

    handleLogin = (user, password) => {
        let details = {
            'email': user,
            'password': password
        };

        let requestBuilder = new RequestBuilder('api/login', 'POST', details);

        fetch(requestBuilder.getFullPathWithoutToken(), requestBuilder.getRequestData())
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log(response.message);
                if(response.user) {
                    localStorage.setItem('token', response.token);
                    localStorage.setItem('userID', response.user.id);
                }
                this.setState({
                    verified: response.verified
                });
                console.log(this.state.verified);
            });
    };

    handleLogout = () => {
        localStorage.clear();
        this.setState({
            verified: false
        })
        console.log('Logout Successful');
    };

    verifyUserToken(userID, token) {
        var details = {
            'userID': userID,
        };

        let requestBuilder = new RequestBuilder('api/verify-token', 'POST', details);

        fetch(requestBuilder.getFullPathWithToken(), requestBuilder.getRequestData())
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log(response);
                this.setState({
                    verified: response
                })
                if(!response) {
                    localStorage.clear();
                }
            });
    }

    checkLogin() {
        if (this.state.verified) {
            return (
                <HomePage
                    handleLogout={this.handleLogout}
                />
            )
        }
        else if (this.state.verified === '') {
            return (
                <div></div>
            )
        }
        else {
            return (
                <LoginPage handleLogin={this.handleLogin}/>
            )
        }
    }

    render() {

        return (
            <div className="App">
                {this.checkLogin()}
            </div>
        );
    }
}

export default App;
