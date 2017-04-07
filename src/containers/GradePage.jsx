import React, {Component} from 'react';
// import ConvertExcel from 'excel-as-json';

import RequestBuilder from '../helpers/RequestBuilder';
import GradeTable from '../components/grades/GradeTable';

let options = {
    baseUrl:'http://127.0.0.1',
};

export default class GradePage extends Component {
    constructor() {
        super();
        this.state = {
            gradesheetFile: null
        }
    };

    handleFileChange = (e) => {
        console.log(e.target.files[0]);
        let reader = new FileReader();
        reader.onload = (readerEvt) => {
            console.log(readerEvt.target.result);
            this.setState({gradesheetFile: readerEvt.target.result})
        };
        reader.readAsDataURL(e.target.files[0]);

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
            });
    };

    renderPage = () => {
        return (
            <GradeTable
                grades={this.props.grades}
            />
        )
    };
    render() {
        return (
            <div>
            <form onSubmit={this.uploadGradeSheet} onChange={this.handleFileChange}>
                <label>Upload File:</label>
                <input
                    type="file"
                    name="input"
                />
                <button type="submit">Upload</button>
            </form>
                {this.renderPage()}
            </div>
        )
    }
}