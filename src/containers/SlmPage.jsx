import React, {Component} from 'react';

import 'whatwg-fetch';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RequestBuilder from '../helpers/RequestBuilder';

import SlmTable from '../components/slms/SlmTable';
import SlmInput from './slms/SlmInput';

let divStyle = {
    textAlign: 'center'
};

let leftHalf = {
    float: 'left',
    width: '50%'
};

let rightHalf = {
    float: 'right',
    width: '50%'
};


export default class SlmPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSlm: props.activeSlm,
        }
    };

    handleSlmdataChange = (event, index, value) => {
        let oldSlm = this.state.activeSlm;
        if(event.target.name === "details") {
            oldSlm.slmdata[event.target.name] = event.target.value;
        }
        else {
            let newValue = event.target.value !== "" ? parseInt(event.target.value) : 0;
            oldSlm.slmdata[event.target.name] = isNaN(newValue) ? oldSlm.slmdata[event.target.name] : newValue;
        }
        this.setState({activeSlm: oldSlm});
    };

    handleSlmdataSubmit = () => {

        this.props.manualSubmitData(this.state.activeSlm.slmdata);
    };

    setActiveSlm = (slm) => {
        this.setState({activeSlm: slm});
        this.props.setActiveSlm(slm);
    };

    renderPage = () => {
        return (
            <div className="row">
                <div style={leftHalf}>
                    <SlmTable
                        slms={this.props.slms}
                        activeSlm={this.state.activeSlm}
                        setActiveSlm={this.setActiveSlm}
                    />
                </div>
                <div style={rightHalf}>
                    {this.renderSlmData()}
                </div>
            </div>
        )
    };


    renderSlmData = () => {
        if (this.props.activeSlm) {
            return (
                <div style={divStyle}>
                    <MuiThemeProvider>
                        <SlmInput
                            handleSlmdataChange={this.handleSlmdataChange}
                            handleSlmdataSubmit={this.handleSlmdataSubmit}
                            slmObject={this.props.activeSlm}/>
                    </MuiThemeProvider>
                </div>
            )
        }
        else {
            return null;
        }
    };

    render() {
        return (
            <div>
                {this.renderPage()}
            </div>
        )
    }
}