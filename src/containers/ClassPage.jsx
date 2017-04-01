import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import 'whatwg-fetch';
import RequestBuilder from '../helpers/RequestBuilder';

import SlmPage from './SlmPage';
import TopClassToolbar from '../components/structure/navbar/TopClassToolbar';
import SlmTable from '../components/slms/SlmTable';

export default class ClassPage extends Component {
    constructor(props) {
        super();
        this.state = {
            classObj: props.classObj,
            activeTab: "SLMs",
            slms: [],
            activeSlm: null
        };
        this.getSlms();
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