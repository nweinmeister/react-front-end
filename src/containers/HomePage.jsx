import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import TextField from 'material-ui/TextField';
import 'whatwg-fetch';
import ClassList from '../components/classes/ClassList';
import ClassPage from './ClassPage';
import RequestBuilder from '../helpers/RequestBuilder';

import TopToolbar from '../components/structure/navbar/TopToolbar';
import SideDrawer from '../components/structure/navbar/SideDrawer';

export default class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            classes: [],
            activeClass: null,
            sideDrawerOpen: false
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

    renderClassPage = () => {
        return(
            <div>
                <MuiThemeProvider>
                    <TopToolbar
                        activeClass={this.state.activeClass}
                        clearActiveClass={this.clearActiveClass}
                        handleLogout={this.props.handleLogout}
                    />
                </MuiThemeProvider>
                <ClassPage
                    classObj={this.state.activeClass}
                    clearActiveClass={this.clearActiveClass}
                />
            </div>
            )
    };

    renderClasses = () => {
        return(
            <div>
                <MuiThemeProvider>
                    <TopToolbar
                        activeClass={this.state.activeClass}
                        clearActiveClass={this.clearActiveClass}
                        handleLogout={this.props.handleLogout}
                    />
                </MuiThemeProvider>
                <ClassList
                    classes={this.state.classes}
                    handleSelect={this.setActiveClass}
                />
            </div>
        )};

    setActiveClass = (classObj) => {
        console.log(classObj);
        this.setState({
            activeClass: classObj
        })
    };

    clearActiveClass = () => {
        this.setState({
            activeClass: null
        })
    };

    toggleSideDrawer = () => {
        this.setState({sideDrawerOpen: this.state.sideDrawerOpen !== true});
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
                <SideDrawer open={this.state.sideDrawerOpen}/>
                {this.renderPage()}
            </div>
        )
    }
}