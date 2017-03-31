import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import TextField from 'material-ui/TextField';
import 'whatwg-fetch';
import ClassList from '../components/classes/ClassList';
import RequestBuilder from '../helpers/RequestBuilder';

import TopToolbar from '../components/structure/navbar/TopToolbar';

export default class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            classes: [],
            activeClass: null
        };
        this.getClasses();
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

    renderPage = () => {
        if(this.state.activeClass == null) {
            return this.renderClasses();
        }
        else {
            return this.renderClassPage();
        }
    };

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
                <MuiThemeProvider>
                    <TopToolbar/>
                </MuiThemeProvider>
                <h1>Home Page</h1>
                {this.renderPage()}
                <MuiThemeProvider>
                    <RaisedButton
                        label="Logout"
                        primary={true}
                        onClick={this.props.handleLogout}
                        onTouchTap={null}
                    />
                </MuiThemeProvider>


            </div>
        )
    }
}