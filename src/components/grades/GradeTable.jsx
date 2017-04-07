import React, {Component} from 'react';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

export default class GradeTable extends Component {
    renderGradeRows = () => {
        return this.props.grades.map((grade) =>
            <TableRow
                key={grade.id}
                rowNumber={grade.id}
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
            </TableRow>
        )
    };

    render() {
        return (
            <div>
                <Table multiSelectable={true} >
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Assignment Name</TableHeaderColumn>
                            <TableHeaderColumn>Excellent</TableHeaderColumn>
                            <TableHeaderColumn>Acceptable</TableHeaderColumn>
                            <TableHeaderColumn>Unacceptable</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody deselectOnClickaway={false}>
                        {this.renderGradeRows()}
                    </TableBody>
                </Table>
            </div>
        )
    }
}