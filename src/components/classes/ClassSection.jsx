import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Pic from './pictures/1.jpg';

const style = {
    height: 450,
    width: 350,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

export default class ClassSection extends Component {
    handleSelect = () => {
        this.props.handleSelect(this.props.obj)
    };

    render() {
        let pictureId = ((this.props.obj.crnId % 6) + 1).toFixed(0);
        console.log(pictureId);
        return(
            <MuiThemeProvider>
                <Card style={style}>
                    <CardHeader
                        title="URL Avatar"
                        subtitle="Subtitle"
                        avatar="http://lorempixel.com/100/100/nature/"
                    />

                    <CardMedia>
                        <img src={require("./pictures/" + pictureId + ".jpg")} />
                    </CardMedia>
                    <CardTitle value="test" onClick={this.handleSelect} title={<FlatButton>{this.props.name}</FlatButton>} subtitle={this.props.semester.semester}>
                    </CardTitle>
                </Card>
            </MuiThemeProvider>
        )
    }
}