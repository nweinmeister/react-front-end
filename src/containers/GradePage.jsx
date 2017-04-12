import React, {Component} from 'react';
// import ConvertExcel from 'excel-as-json';

import RequestBuilder from '../helpers/RequestBuilder';
import GradeTable from '../components/grades/GradeTable';
import GradeSheetInputForm from '../components/grades/GradeSheetInputForm';

const divStyle = {
    textAlign: 'center',
};

export default class GradePage extends Component {
    constructor() {
        super();
        this.state = {
            activeGrade: null,
            gradesheetFile: null
        }
    };

    handleFileChange = (e) => {
        if(e.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (readerEvt) => {
                this.setState({gradesheetFile: readerEvt.target.result})
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    uploadGradeSheet = (e) => {
        e.preventDefault();
        console.log(this.props.classObj);
        let body = {'gradesheet': this.state.gradesheetFile,
                    'crnId': this.props.classObj.crnId,
                    'semesterId': this.props.classObj.semester.id};

        let requestBuilder = new RequestBuilder('api/upload-gradesheet', 'POST', body);
        fetch(requestBuilder.getFullPathWithToken(), requestBuilder.getRequestData())
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log(response);
                this.props.refreshGrades();
                this.setState({gradesheetFile: null});
            });
    };

    handleDelete = (e) => {
        let body = {'gradeId': e.target.value};
        let requestBuilder = new RequestBuilder('api/delete-grade', 'POST', body);
        fetch(requestBuilder.getFullPathWithToken(), requestBuilder.getRequestData())
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log(response);
                this.props.refreshGrades();
            });
        this.setState({activeGrade: null})
    };

    renderPage = () => {
        return (
            <GradeTable
                grades={this.props.grades}
                activeGrade={this.state.activeGrade}
                setActiveGrade={this.props.setActiveGrade}
                handleDelete={this.handleDelete}
            />
        )
    };
    render() {
        return (
            <div style={divStyle}>
                <GradeSheetInputForm
                    handleFileChange={this.handleFileChange}
                    handleUpload={this.uploadGradeSheet}
                />
                <br />
                {this.renderPage()}
            </div>
        )
    }
}