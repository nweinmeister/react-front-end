import React, {Component} from 'react';

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
            return <SlmInput slmObject={this.props.activeSlm}/>
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