import React, {Component} from 'react';

import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const cardStyle = {
    height: 400,
    width: 500,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

const style = {
    marginLeft: 20,
    width: 300,
    textAlign: 'center'
};

export default class SlmDataForm extends Component {
    handleSubmit = (e) => {
        console.log(e.target.parent);
    };

    render() {
        return (
            <Paper style={cardStyle} zDepth={2}>
                <TextField defaultValue={this.props.slmdataObject.excellent}
                           floatingLabelText="Excellent"
                           style={style}
                           underlineShow={false}/>
                <Divider />
                <TextField defaultValue={this.props.slmdataObject.acceptable}
                           floatingLabelText="Acceptable"
                           style={style}
                           underlineShow={false}/>
                <Divider />
                <TextField defaultValue={this.props.slmdataObject.unacceptable}
                           floatingLabelText="Unacceptable"
                           style={style}
                           underlineShow={false}/>
                <Divider />
                <TextField defaultValue={this.props.slmdataObject.details}
                           floatingLabelText="Details"
                           style={style}
                           underlineShow={false}/>
                <Divider />
                <RaisedButton label="Save" primary={true} onClick={this.handleSubmit}/>
            </Paper>
        )
    }
}