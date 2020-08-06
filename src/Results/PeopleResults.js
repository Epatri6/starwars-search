import React from 'react';

export default class Film extends React.Component {
    render() {
        const {result} = this.props;
        return (
            <>
            <h3>{result['name']}</h3>
            <div>{`Birth Year: ${result['birth_year']}`}</div>
            <div>{`Height: ${result['height']}`}</div>
            <div>{`Gender: ${result['gender']}`}</div>
            </>
        );
    };
}