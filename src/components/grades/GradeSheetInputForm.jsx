import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const paperStyle = {
    textAlign: 'center',
    verticalAlign: 'middle',
    height: 100,
    width: 800,
};

const divStyle = {
    textAlign: 'center'
}

export default class GradeSheetInputForm extends Component {
    render() {
        return (
            <div style={divStyle}>
                <Paper style={paperStyle} zDepth={2}>
                    <RaisedButton
                        containerElement="label"
                        label="Gradesheet File: "
                        labelPosition="before">
                        <input type="file" onChange={this.props.handleFileChange}/>
                    </RaisedButton>
                    <RaisedButton
                        onClick={this.props.handleUpload}
                        primary={true}>
                        Upload
                    </RaisedButton>
                </Paper>
            </div>
        )
    }
}