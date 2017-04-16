import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const paperStyle = {
    margin: 'auto',
    textAlign: 'center',
    verticalAlign: 'middle',
    height: 'auto',
    width: 800,
};

const divStyle = {
    textAlign: 'center'
};

const style = {
    display: 'none'
};

export default class GradeSheetInputForm extends Component {
    handleUpload = (e) => {
        //Hacky way of clearing gradesheet input
        this.refs.GradesheetInput.value = "";
        this.props.handleUpload(e);
    };

    render() {
        console.log(this.props.gradesheetFile);
        return (
            <div style={divStyle}>
                <Paper style={paperStyle} zDepth={2}>
                    <div className="row">
                        <RaisedButton
                            containerElement="label"
                            label="Gradesheet File: "
                            labelPosition="before">
                            <input type="file" onChange={this.props.handleFileChange} ref="GradesheetInput"/>
                        </RaisedButton>
                        <RaisedButton
                            onClick={this.handleUpload}
                            primary={true}>
                            Upload
                        </RaisedButton>
                    </div>
                    <div className="row">
                        <TextField
                            onChange={this.props.changeExcellentLevel}
                            value={this.props.excellentLevel}
                            floatingLabelText="Excellent Level"
                        />
                        <br />
                        <TextField
                            onChange={this.props.changeAcceptableLevel}
                            value={this.props.acceptableLevel}
                            floatingLabelText="Acceptable Level"
                        />
                    </div>
                </Paper>
            </div>
        )
    }
}