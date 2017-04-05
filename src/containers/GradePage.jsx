import React, {Component} from 'react';

export default class GradePage extends Component {
    renderPage = () => {
        return(
            this.props.grades.map((grade) =>
                <p key={grade.id}>{grade.type}</p>
            )
        )
    };


    render() {
        return(
            <div>
                {this.renderPage()}
            </div>
        )
    }
}