import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {Tabs, Tab} from 'material-ui/Tabs';

const style = {
    height: 400,
    width: 400,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};


export default class TopClassToolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
        };
    }

    handleChange = (event, index, value) => this.setState({value});


    handleActive = (e) => {
        this.props.setActiveTab(e.props.value);
    };

    render() {
        return (
            <div>
                <Toolbar>
                    <ToolbarGroup firstChild={true}>
                        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                            <MenuItem value={1} primaryText="Home"/>
                        </DropDownMenu>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <ToolbarTitle text={this.props.classObj.name}/>
                        <FontIcon className="muidocs-icon-custom-sort"/>
                        <ToolbarSeparator />
                        <RaisedButton label="Go Home" primary={true}/>
                        <IconMenu
                            iconButtonElement={
                                <IconButton touch={true}>
                                    <NavigationExpandMoreIcon />
                                </IconButton>
                            }
                        >
                            <MenuItem primaryText="Logout"/>
                            <MenuItem primaryText="More Info"/>
                        </IconMenu>
                    </ToolbarGroup>
                </Toolbar>
                <Tabs>
                    <Tab label="SLMs"
                         value="SLMs"
                         onActive={this.handleActive}
                    >
                    </Tab>
                    <Tab
                        label="Grades"
                        value="Grades"
                        onActive={this.handleActive}
                    >
                        <div>

                        </div>
                    </Tab>
                    <Tab
                        label="Class Info"
                        value="Class Info"
                        onActive={this.handleActive}
                    >
                        <div>

                        </div>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}