import React, {Component} from 'react';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

export default class SlmTableBody extends Component {
    render() {
        return(
            <TableBody>
                <TableRow>
                    <TableRowColumn>1</TableRowColumn>
                    <TableRowColumn>John Smith</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>2</TableRowColumn>
                    <TableRowColumn>Randal White</TableRowColumn>
                    <TableRowColumn>Unemployed</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>3</TableRowColumn>
                    <TableRowColumn>Stephanie Sanders</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>4</TableRowColumn>
                    <TableRowColumn>Steve Brown</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
                </TableRow>
            </TableBody>
        )
    }
}