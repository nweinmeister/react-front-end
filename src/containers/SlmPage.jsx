import React, {Component} from 'react';

import SlmTable from '../components/slms/SlmTable';
import SlmDataForm from '../components/slmdata/SlmDataForm';

export default class SlmPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSlm: props.activeSlm
        }
    }

    renderPage = () => {
        return(
            <SlmTable
                slms={this.props.slms}
                activeSlm={this.state.activeSlm}
                setActiveSlm={this.props.setActiveSlm}
                />
        )
    };

    render() {
        return (
            <div>
                {this.renderPage()}
            </div>
        )
    }
}