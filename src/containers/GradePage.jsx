import React, {Component} from 'react';
// import ConvertExcel from 'excel-as-json';

import RequestBuilder from '../helpers/RequestBuilder';
import GradeTable from '../components/grades/GradeTable';
import GradeSheetInputForm from '../components/grades/GradeSheetInputForm';
import GradeActionForm from '../components/grades/GradeActionForm';

const divStyle = {
    textAlign: 'center',
};

export default class GradePage extends Component {
    constructor() {
        super();
        this.state = {
            activeGrades: null,
            gradesheetFile: "",
            gradesheetRaw: "",
            excellentLevel: 85,
            acceptableLevel: 65
        }
    };

    handleFileChange = (e) => {
        if(e.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (readerEvt) => {
                this.setState({
                    gradesheetFile: readerEvt.target.result
                })
            };
            reader.readAsDataURL(e.target.files[0]);
            this.setState({gradesheetRaw: e.target.files})
        }
    };

    changeExcellentLevel = (event, value) => {
        this.setState({excellentLevel: value});
    };

    changeAcceptableLevel = (event, value) => {
        this.setState({acceptableLevel: value})
    };

    uploadGradeSheet = (e) => {
        e.preventDefault();
        console.log(this.props.classObj);
        let body = {'gradesheet': this.state.gradesheetFile,
                    'excellentLevel': this.state.excellentLevel,
                    'acceptableLevel': this.state.acceptableLevel,
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
                this.setState({
                    gradesheetRaw: "",
                    gradesheetFile: "",
                    excellentLevel: 85,
                    acceptableLevel: 65});
            });
    };

    setActiveGrades = (grades) => {
        this.setState({activeGrades: grades});
    };

    gradeAction = (action) => {
        switch(action) {
            case "Delete":
                this.deleteGrades(this.state.activeGrades);
                break;
            case "Edit":
                console.log("Editing");
        }
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
        this.setState({activeGrades: null})
    };

    deleteGrades = (grades) => {
        console.log(grades);
        let body = {'grades': grades.toString()};
        console.log(body);
        let requestBuilder = new RequestBuilder('api/delete-grades', 'POST', body);
        fetch(requestBuilder.getFullPathWithToken(), requestBuilder.getRequestData())
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log(response);
                this.props.refreshGrades();
            });
        this.setState({activeGrades: null})
    };

    renderPage = () => {
        return (
            <GradeTable
                grades={this.props.grades}
                activeGrades={this.state.activeGrades}
                setActiveGrades={this.setActiveGrades}
                handleDelete={this.handleDelete}
            />
        )
    };
    render() {
        return (
            <div style={divStyle}>
                <GradeSheetInputForm
                    excellentLevel={this.state.excellentLevel}
                    acceptableLevel={this.state.acceptableLevel}
                    gradesheetRaw={this.state.gradesheetRaw}
                    changeExcellentLevel={this.changeExcellentLevel}
                    changeAcceptableLevel={this.changeAcceptableLevel}
                    handleFileChange={this.handleFileChange}
                    handleUpload={this.uploadGradeSheet}
                />
                <br />
                <GradeActionForm
                    gradeAction={this.gradeAction}
                />
                <br />
                {this.renderPage()}
            </div>
        )
    }
}