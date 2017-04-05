import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import 'whatwg-fetch';
import RequestBuilder from '../helpers/RequestBuilder';

import SlmPage from './SlmPage';
import GradePage from './GradePage';
import TopClassToolbar from '../components/structure/navbar/TopClassToolbar';
import SlmTable from '../components/slms/SlmTable';

export default class ClassPage extends Component {
    constructor(props) {
        super();
        this.state = {
            classObj: props.classObj,
            activeTab: "SLMs",
            slms: [],
            grades: [],
            activeSlm: null
        };
        this.getSlms();
        this.getGrades();
    }


    renderPage = () => {
        if(this.state.activeTab == "SLMs") {
            return (<SlmPage
                    slms={this.state.slms}
                    activeSlm={this.state.activeSlm}
                    setActiveSlm={this.setActiveSlm}
                />
            )
        }
        else if(this.state.activeTab == "Grades") {
            return (<GradePage grades={this.state.grades} />)
        }
        else if(this.state.activeTab == "Class Info") {
            return (
                <div>
                    <h1>{this.state.classObj.name}</h1>
                    <h3>{this.state.classObj.semester.semester}</h3>
                </div>
            )
        }
        return(<h1>test</h1>)
    };

    renderSlmPage = () => {
        if(this.state.activeSlm) {
            return <SlmPage slm={this.state.activeSlm}/>
        }
        return null;
    };

    setActiveTab = (tabName) => {
        this.setState({activeTab: tabName})
    };

    setActiveSlm = (slm) => {
        this.setState({activeSlm: slm});
    };

    getSlms = () => {
        let body = {'crnId': this.state.classObj.crnId};
        let requestBuilder = new RequestBuilder('api/slms', 'POST', body);
        fetch(requestBuilder.getFullPathWithToken(), requestBuilder.getRequestData())
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log(response);
                this.setState({
                    slms: response.slmDTOArray
                })
            })

    };

    getGrades = () => {
        let body = {'crnId': this.state.classObj.crnId};
        let requestBuilder = new RequestBuilder('api/grades', 'POST', body);
        fetch(requestBuilder.getFullPathWithToken(), requestBuilder.getRequestData())
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log(response);
                this.setState({
                    grades: response.gradeDTOArray
                })
            })
    };

    render() {
        return(
            <div>
                <MuiThemeProvider>
                    <TopClassToolbar
                        setActiveTab={this.setActiveTab}
                        classObj={this.props.classObj}/>
                </MuiThemeProvider>

                <MuiThemeProvider>
                    {this.renderPage()}
                </MuiThemeProvider>

                <MuiThemeProvider>
                    <RaisedButton onClick={this.props.clearActiveClass}>
                        Back
                    </RaisedButton>
                </MuiThemeProvider>
            </div>
        )
    }
}