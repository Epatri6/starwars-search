import React from 'react';

export default class Film extends React.Component {
    render() {
        const {result} = this.props;
        return (
            <>
            <h3>{result['name']}</h3>
            <div>{`Classification: ${result['classification']}`}</div>
            <div>{`Average Height: ${result['average_height']}`}</div>
            <div>{`Average Lifespan: ${result['average_lifespan']}`}</div>
            </>
        );
    };
}