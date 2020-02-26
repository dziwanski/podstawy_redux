import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore, combineReducers, bindActionCreators} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';


const initialFilms = {
    listName: 'Favourite films',
    list: [
        'Rambo 3', "Terminator", "Pokemony"
    ]
};



function movies(state = initialFilms, action) {
    switch (action.type) {
        case 'ADD_MOVIE':
            return {
                ...state, list: [...state.list, action.item]
            };
        case 'RESET_MOVIES':
            return {
                ...state, list: []
            };
        default:
            return state
    }
}



const allReducers = combineReducers({movies, actors});

const store = createStore(allReducers, composeWithDevTools());
window.store = store;

// Creators for movies
const addMovie = movie => ({type: 'ADD_MOVIE', item: movie});
const resetMovie = () => ({type: 'RESET_MOVIES'});
const movieActions = bindActionCreators({add: addMovie, reset: resetMovie}, store.dispatch);

// Creators for actors

const actorActions = bindActionCreators({add: addActor, reset: resetActors}, store.dispatch);

store.dispatch(addActor('Cezary pazura'));

movieActions.reset();
movieActions.add('Chlopaki z barakow');

actorActions.reset();
actorActions.add('Ja');


function App() {
    return (
        <div className="App">
            <header className="App-header">

            </header>
        </div>
    );
}

export default App;
