import React, { Component } from 'react';

class Course extends Component {
    render () {
        const paramsString = this.props.location.search;
        const searchParams = new URLSearchParams(paramsString);
        let title = [];
        for(let p of searchParams) {
            title.push(p);
        }
        
        return (
            <div>
                <h1>{title[0][1]}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;