import React from 'react';
import Films from '../Results/Films';
import PeopleResults from '../Results/PeopleResults'
import Planets from '../Results/Planets';
import Species from '../Results/Species';
import Starships from '../Results/Starships';
import Vechicles from '../Results/Vechicles';

export default class ResultSection extends React.Component {

    renderResults = (title, result, index) => {
        switch(title) {
            case 'people':
                return <PeopleResults key={index} result={result}/>
            case 'planets':
                return <Planets key={index} result={result}/>
            case 'films':
                return <Films key={index} result={result}/>
            case 'species':
                return <Species key={index} result={result}/>
            case 'vehicles':
                return <Vechicles key={index} result={result}/>
            case 'starships':
                return <Starships key={index} result={result}/>
            default:
                return ''
        }
    }

    render() {
        const {title, results} = this.props;
        console.log(results);
        return (
            <>
                <h2>{title.toUpperCase()}</h2>
                {results.map((res, index) => {
                    return this.renderResults(title, res, index);
                })}
            </>
        );
    };
}