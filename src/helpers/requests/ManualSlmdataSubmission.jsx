import React, {Component} from 'react';

import RequestBuilder from '../RequestBuilder';

export default class ManualSlmdataSubmission {
    constructor(slmdata, crnId, slmId) {
        this.slmdata = slmdata;
        this.crnId = crnId;
        this.slmId = slmId;
    }

    submit = (callback) => {
        let body = this.slmdata;
        body.crnId = this.crnId;
        body.slmId = this.slmId;
        let requestBuilder = new RequestBuilder('api/slms/manual', 'POST', body);
        fetch(requestBuilder.getFullPathWithToken(), requestBuilder.getRequestData())
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log(response);
                callback();
            })
    }
}