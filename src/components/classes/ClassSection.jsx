import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const style = {
    height: 400,
    width: 400,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

export default class ClassSection extends Component {
    handleSelect = () => {
        this.props.handleSelect(this.props.obj)
    }
    render() {
        return(
            <MuiThemeProvider>
                <Card style={style}>
                    <CardHeader
                        title="URL Avatar"
                        subtitle="Subtitle"
                        avatar="http://lorempixel.com/100/100/nature/"
                    />

                    <CardMedia>
                        <img src="http://lorempixel.com/600/337/nature/" />
                    </CardMedia>
                    <CardTitle value="test" onClick={this.handleSelect} title={<FlatButton>{this.props.name}</FlatButton>} subtitle={this.props.semester.semester}>
                    </CardTitle>
                </Card>
            </MuiThemeProvider>
        )
    }
}