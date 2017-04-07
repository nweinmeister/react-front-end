import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SlmTable from '../components/slms/SlmTable';
import SlmInput from './slms/SlmInput';

export default class SlmPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSlm: props.activeSlm
        }
    }

    renderPage = () => {
        return(
            <div>
            <SlmTable
                slms={this.props.slms}
                activeSlm={this.state.activeSlm}
                setActiveSlm={this.props.setActiveSlm}
                />
                {this.renderSlmData()}
            </div>
        )
    };


    renderSlmData = () => {
        if(this.props.activeSlm) {
            return <MuiThemeProvider><SlmInput slmObject={this.props.activeSlm}/></MuiThemeProvider>
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