import React, {Component} from 'react';
import SlmDataForm from '../../components/slmdata/SlmDataForm';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const style = {
    height: 450,
    width: 350,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

const cardStyle = {
    height: 400,
    width: 500,
    margin: 'auto',
    textAlign: 'center',
    display: 'inline-block',
};

export default class SlmInput extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            inputStyle: "manual",
            slmDataArray: {},
            value: null,
            slmObject: this.props.slmObject
        });
        console.log(props.slmObject.slmdata);
    }

    handleChange = (event, index, value) => {
        this.setState({value});
    };

    renderPage() {
        switch(this.state.value) {
            case(null):
                return this.dataInfo();
            case("Grades"):
                return this.gradeInputForm();
            case("Manual"):
                return this.existingDataForm();
            case("Upload"):
                return this.uploadForm();
        }
    }

    dataInfo = () => {
        return <h1>Existing Info</h1>
    };

    gradeInputForm = () => {
        return <h1>Grade Input</h1>
    };

    existingDataForm = () => {
        return <SlmDataForm
                    slmdataObject={this.props.slmObject.slmdata}
                    handleSlmdataChange={this.props.handleSlmdataChange}
                    handleSlmdataSubmit={this.props.handleSlmdataSubmit}
        />
    };


    uploadForm = () => {
        return <h1>Upload Form</h1>
    };

    newDataForm = () => {
        return <h1>NO DATA</h1>
    };

    render() {
        return (
            <div>
                <h3>{this.props.slmObject.details}</h3>
                <Paper style={cardStyle}>

                    <SelectField
                        floatingLabelText="Input Method: "
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <MenuItem value={null} primaryText=""/>
                        <MenuItem value="Grades" primaryText="Grades"/>
                        <MenuItem value="Manual" primaryText="Manual"/>
                        <MenuItem value="Upload" primaryText="Upload"/>
                    </SelectField>

                    {this.renderPage()}
                </Paper>
            </div>
        )
    }
}