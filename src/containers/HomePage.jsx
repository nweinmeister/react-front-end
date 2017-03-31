import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import 'whatwg-fetch';
import ClassList from '../components/classes/ClassList';
import RequestBuilder from '../helpers/RequestBuilder';

export default class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            classes: []
        }
    }
    componentWillMount() {

        let requestBuilder = new RequestBuilder('test-api', 'POST');

        fetch(requestBuilder.getFullPathWithToken(), requestBuilder.getRequestData())
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log(response);
            })
    }

    renderClasses = () => {
        return <ClassList
                classes={this.state.classes}
            />
    };

    getClasses = () => {
        let requestBuilder = new RequestBuilder('api/classes', 'POST');
        let classes = null;
        fetch(requestBuilder.getFullPathWithToken(), requestBuilder.getRequestData())
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log(response);
                this.setState({
                    classes: response.classDTOArray
                })
            });
    };

    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <MuiThemeProvider>
                    <RaisedButton
                        label="Logout"
                        primary={true}
                        onClick={this.props.handleLogout}
                        onTouchTap={null}
                    />
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <RaisedButton
                        label="Display Classes"
                        primary={true}
                        onClick={this.getClasses}
                    />
                </MuiThemeProvider>
                <ul>{this.renderClasses()}</ul>

            </div>
        )
    }
}