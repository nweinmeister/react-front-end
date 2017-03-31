import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

export default class SideDrawer extends Component {
    render() {
        return(
            <MuiThemeProvider>
            <Drawer docked={false} open={this.props.open}>
                <MenuItem>Menu Item</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
            </Drawer>
            </MuiThemeProvider>
        )
    }
}