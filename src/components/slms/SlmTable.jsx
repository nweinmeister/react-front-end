import React, {Component} from 'react';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import SlmTableBody from './SlmTableBody';

export default class SlmTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSlm: props.activeSlm,
        }
    };

    setActiveSlm = (e) => {
        this.setState({activeSlm: this.props.slms[e]});
        this.props.setActiveSlm(this.props.slms[e]);
    };

    renderSlmRows = () => {
        return this.props.slms.map((slm) =>
            <TableRow
                key={slm.slmId}
                rowNumber={slm.slmId}
                selected={(this.state.activeSlm) ? this.state.activeSlm.slmId === slm.slmId : false}
            >
                <TableRowColumn>
                    {slm.so.toString() + "." + slm.slm.toString()}
                </TableRowColumn>
                <TableRowColumn>
                    {slm.details}
                </TableRowColumn>
                <TableRowColumn>
                    {slm.complete ? "Complete" : "Incomplete"}
                </TableRowColumn>
            </TableRow>
        )
    };

    render() {
        console.log(this.state.activeSlm);
        return(
            <div>
            <Table onRowSelection={this.setActiveSlm} >
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>SLM</TableHeaderColumn>
                        <TableHeaderColumn>Details</TableHeaderColumn>
                        <TableHeaderColumn>Status</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody deselectOnClickaway={false}>
                    {this.renderSlmRows()}
                </TableBody>
            </Table>
            </div>
        )
    }
}