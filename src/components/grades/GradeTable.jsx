import React, {Component} from 'react';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

export default class GradeTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeGrade: props.activeGrade,
        }
    };

    setActiveGrade = (e) => {
        this.setState({activeGrade: this.props.grades[e]});
        this.props.setActiveGrade(this.props.grades[e]);
        console.log(e);
    };

    handleDelete = (e) => {
        e.preventDefault();
        this.setState({activeGrade: null});
        this.props.handleDelete(e);
    };

    renderTopRow = () => {
        if(this.props.grades) {
            return (
                <div>
                    <Table onRowSelection={this.setActiveGrade} multiSelectable={true} >
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>Assignment Name</TableHeaderColumn>
                                <TableHeaderColumn>Excellent</TableHeaderColumn>
                                <TableHeaderColumn>Acceptable</TableHeaderColumn>
                                <TableHeaderColumn>Unacceptable</TableHeaderColumn>
                                <TableHeaderColumn/>
                            </TableRow>
                        </TableHeader>
                        <TableBody deselectOnClickaway={false}>
                            {this.renderGradeRows()}
                        </TableBody>
                    </Table>
                </div>
            )
        }
        else {
            return null;
        }
    };

    renderGradeRows = () => {
        if(this.props.grades) {
            return this.props.grades.map((grade) =>
                <TableRow
                    key={grade.id}
                    rowNumber={grade.id}
                    selected={(this.state.activeGrade) ? this.state.activeGrade.id === grade.id : false}
                >
                    <TableRowColumn>
                        {grade.type} {grade.number}
                    </TableRowColumn>
                    <TableRowColumn>
                        {grade.excellent}
                    </TableRowColumn>
                    <TableRowColumn>
                        {grade.acceptable}
                    </TableRowColumn>
                    <TableRowColumn>
                        {grade.unacceptable}
                    </TableRowColumn>
                    <TableRowColumn value={grade.id}>
                        <button
                            className="RaisedButton"
                            secondary={true}
                            value={grade.id}
                            onClick={this.handleDelete}>
                            Delete
                        </button>
                    </TableRowColumn>
                </TableRow>
            )
        }
        else {
            return null;
        }
    };

    render() {
        return (
            <div>
                {this.renderTopRow()}
            </div>
        )
    }
}