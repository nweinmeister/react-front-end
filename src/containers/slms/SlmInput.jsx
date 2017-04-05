import React, {Component} from 'react';
import SlmDataForm from '../../components/slmdata/SlmDataForm';

const style = {
    height: 450,
    width: 350,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

export default class SlmInput extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            inputStyle: "manual",
            slmDataArray: {}
        })
    }

    renderPage() {
        if(this.props.slmObject.slmdata) {
            return this.existingDataForm();
        }
        else{
            return this.newDataForm();
        }
    }

    existingDataForm = () => {
        return <SlmDataForm slmdataObject={this.props.slmObject.slmdata}/>
    };

    newDataForm = () => {
        return <h1>NO DATA</h1>
    };

    handleManualEntry = (e) => {

    };

    handleManualSubmission = (slmdataArray) => {
        console.log(slmdataArray);
    };

    render() {
        return(
            <div>
                {this.renderPage()}
            </div>
        )
    }
}