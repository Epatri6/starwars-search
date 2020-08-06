import React from 'react';

export default class Film extends React.Component {
    render() {
        const {result} = this.props;
        return (
            <>
            <h3>{result['title']}</h3>
            <div>{`Episode Number: ${result['episode_id']}`}</div>
            <div>{`Director: ${result['director']}`}</div>
            <div>{`Release Date: ${result['release_date']}`}</div>
            </>
        );
    };
}