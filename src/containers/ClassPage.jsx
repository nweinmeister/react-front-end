import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';

import 'whatwg-fetch';
import RequestBuilder from '../helpers/RequestBuilder';
import ManualSlmdataSubmission from '../helpers/requests/ManualSlmdataSubmission';

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
            activeSlm: null,
            activeGrade: null
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

    setActiveGrade = (grade) => {
        this.setState({activeGrade: grade})
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

    manualSubmitData = (slmdata) => {
        let submission = new ManualSlmdataSubmission(slmdata, this.state.classObj.crnId, this.state.activeSlm.slmId);
        submission.submit((callback) => {
            let oldSlm = this.state.activeSlm;
            oldSlm.complete = true;
            this.setState({activeSlm: oldSlm});
            console.log('next');
        });
    };

    render() {
        return (
            <MuiThemeProvider>
            <Tabs>
                <Tab label="SLMs"
                     value="SLMs"
                >
                    <SlmPage
                        slms={this.state.slms}
                        activeSlm={this.state.activeSlm}
                        setActiveSlm={this.setActiveSlm}
                        manualSubmitData={this.manualSubmitData}
                    />
                </Tab>
                <Tab
                    label="Grades"
                    value="Grades"
                >
                    <GradePage
                        classObj={this.props.classObj}
                        grades={this.state.grades}
                        activeGrade={this.state.activeGrade}
                        setActiveGrade={this.setActiveGrade}
                        refreshGrades={this.getGrades}
                        />
                </Tab>
                <Tab
                    label="Class Info"
                    value="Class Info"
                >
                    <div>
                        <h1>{this.state.classObj.name}</h1>
                        <h3>{this.state.classObj.semester.semester}</h3>
                    </div>
                </Tab>
            </Tabs>
            </MuiThemeProvider>
        )
    }
}