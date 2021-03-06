import React, {Component} from 'react';

let SERVER_PATH = "http://projectalpha.ddns.net/";

export default class RequestBuilder {
    constructor(path, method, body = []) {
        this.path = path;
        this.method = method;
        this.body = body;
    }

    getFullPathWithToken() {
        return SERVER_PATH + this.path + '?token={' + localStorage.getItem('token') + '}'
    }

    getFullPathWithoutToken() {
        return SERVER_PATH + this.path;
    }

    getRequestData() {

        return {
            method: this.method,
            mode: 'cors',
            body: this.buildFormBody(),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        };
    }

    buildFormBody() {
        if(!('userID' in this.body)) {
            this.body.userID = localStorage.userID;
        }
        let formBody = [];
        for (let property in this.body) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(this.body[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        return formBody;
    }
}