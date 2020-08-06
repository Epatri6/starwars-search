import React from 'react';

export default class Film extends React.Component {
    render() {
        const {result} = this.props;
        return (
            <>
            <h3>{result['name']}</h3>
            <div>{`Diameter: ${result['diameter']}`}</div>
            <div>{`Gravity: ${result['gravity']}`}</div>
            <div>{`Population: ${result['population']}`}</div>
            </>
        );
    };
}