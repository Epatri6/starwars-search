import React from 'react';
import Films from '../Results/Films';
import PeopleResults from '../Results/PeopleResults'
import Planets from '../Results/Planets';
import Species from '../Results/Species';
import Starships from '../Results/Starships';
import Vechicles from '../Results/Vechicles';

export default class ResultSection extends React.Component {

    renderResults = (title, results) => {
        let jsx = '';
        switch(title) {
            case 'people':
                break;
            case 'planets':
                break;
            case 'film':
                break;
            case 'species':
                break;
            case 'vehicles':
                break;
            case 'starships':
                break;
            default:
                break;

        }
        return jsx;
    }

    render() {
        const {title, results} = this.props;
        return (
            <>
                <h2>{title.toUpperCase()}</h2>
                {this.renderResults(title, results)}
            </>
        );
    };
}