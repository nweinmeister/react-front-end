import React, {Component} from 'react';

import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const cardStyle = {
    height: 400,
    width: 500,
    margin: 'auto',
    textAlign: 'center',
    display: 'inline-block',
};

const style = {
    marginLeft: 20,
    width: 300,
    textAlign: 'center'
};

export default class SlmDataForm extends Component {
    render() {
        console.log(this.props.slmdataObject);
        return (
            <div>
                <TextField value={this.props.slmdataObject.excellent}
                           name="excellent"
                           floatingLabelText="Excellent"
                           style={style}
                           underlineShow={false}
                            onChange={this.props.handleSlmdataChange}/>
                <Divider />
                <TextField value={this.props.slmdataObject.acceptable}
                           name="acceptable"
                           floatingLabelText="Acceptable"
                           style={style}
                           underlineShow={false}
                           onChange={this.props.handleSlmdataChange}/>
                <Divider />
                <TextField value={this.props.slmdataObject.unacceptable}
                           name="unacceptable"
                           floatingLabelText="Unacceptable"
                           style={style}
                           underlineShow={false}
                           onChange={this.props.handleSlmdataChange}/>
                <Divider />
                <TextField value={this.props.slmdataObject.details}
                           name="details"
                           floatingLabelText="Details"
                           style={style}
                           underlineShow={false}
                           onChange={this.props.handleSlmdataChange}/>
                <Divider />
                <RaisedButton label="Save" primary={true} onClick={this.props.handleSlmdataSubmit}/>
            </div>
        )
    }
}