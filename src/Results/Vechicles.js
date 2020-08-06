import React from 'react';

export default class Film extends React.Component {
    render() {
        const {result} = this.props;
        return (
            <>
            <h3>{result['name']}</h3>
            <div>{`Model: ${result['model']}`}</div>
            <div>{`Vehicle Class: ${result['vehicle_class']}`}</div>
            <div>{`Length: ${result['length']}m`}</div>
            </>
        );
    };
}