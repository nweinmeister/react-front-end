import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class GradeActionForm extends Component {
    state = {
        value: null,
    };

    handleChange = (event, index, value) => {
        this.setState({value: value});
        console.log(value);
        this.props.gradeAction(value);
    };

    render() {
        return (
            <div>
                <SelectField
                    floatingLabelText="With Selected: "
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <MenuItem value={null} primaryText="" />
                    <MenuItem value="Delete" primaryText="Delete" />
                    <MenuItem value="Edit" primaryText="Edit" />
                </SelectField>
            </div>
        )
    }
}