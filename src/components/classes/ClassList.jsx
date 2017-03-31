import React, {Component} from 'react';

import ClassSection from './ClassSection';

export default class ClassList extends Component {
    renderClasses = () => {
        return this.props.classes.map((classSection) =>
            <ClassSection
                key={classSection.crnId}
                name={classSection.name}
            />
        )
    };

    render() {
        return(
            <div>
                <ul>
                    {this.renderClasses()}
                </ul>
            </div>
        )
    }
}