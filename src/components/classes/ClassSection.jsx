import React, {Component} from 'react';

export default class ClassSection extends Component {
    render() {
        return(
            <li key={this.props.crnId}>
                {this.props.name}
            </li>
        )
    }
}