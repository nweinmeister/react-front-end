import React, {Component} from 'react';

import ClassSection from './ClassSection';

export default class ClassList extends Component {
    renderClasses = () => {
        return this.props.classes.map((classSection) =>
            <ClassSection
                key={classSection.crnId}
                name={classSection.name}
                semester={classSection.semester}
            />
        )
    };

    render() {
        return(
            <div>
                {this.renderClasses()}
            </div>
        )
    }
}