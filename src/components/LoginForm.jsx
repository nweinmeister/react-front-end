import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class LoginForm extends Component{


    render() {
        return (
            <div>
                <div className="row">
                    <TextField
                        hintText="Username"
                        onChange={this.props.handleUserFieldInput}
                    />
                </div>
                <div className="row">
                    <TextField
                        hintText="Password"
                        type="password"
                        onChange={this.props.handlePasswordFieldInput}
                    />
                </div>
                <div className="row">
                    <RaisedButton
                        label="Login"
                        primary={true}
                        onClick={this.props.handleLogin}
                        onTouchTap={null}
                    />
                </div>
            </div>
        )
    }
}