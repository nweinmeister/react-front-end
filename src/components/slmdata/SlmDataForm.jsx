import React, {Component} from 'react';

import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';


const style = {
    marginLeft: 20,
    width: 100
};

export default class SlmDataForm extends Component {
    render() {
        return (
            <Paper zDepth={2}>
                <TextField hintText="First name" style={style} underlineShow={false}/>
                <Divider />
                <TextField hintText="Middle name" style={style} underlineShow={false}/>
                <Divider />
                <TextField hintText="Last name" style={style} underlineShow={false}/>
                <Divider />
                <TextField hintText="Email address" style={style} underlineShow={false}/>
                <Divider />
            </Paper>
        )
    }
}