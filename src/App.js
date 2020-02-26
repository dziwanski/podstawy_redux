import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore, combineReducers} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';


const initialFilms = {
    listName: 'Favourite films',
    list: [
        'Rambo 3', "Terminator", "Pokemony"
    ]
};

const initialActors = {
    listName: 'Favourite actors',
    list: [
        'Tom Hanks', 'Julia Roberts', 'Robert D. Junior'
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

function actors(state = initialActors, action) {
    switch (action.type) {
        case 'ADD_ACTOR':
            return {
                ...state, list: [...state.list, action.item]
            };
        case 'RESET_ACTORS':
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


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
