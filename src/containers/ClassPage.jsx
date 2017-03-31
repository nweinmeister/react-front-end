import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import TopClassToolbar from '../components/structure/navbar/TopClassToolbar';

export default class ClassPage extends Component {
    render() {
        return(
            <div>
                <MuiThemeProvider>
                    <TopClassToolbar />
                </MuiThemeProvider>
                <h1>
                    {this.props.classObj.name}
                </h1>

                <MuiThemeProvider>
                    <RaisedButton onClick={this.props.clearActiveClass}>
                        Back
                    </RaisedButton>
                </MuiThemeProvider>
            </div>
        )
    }
}