import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore, combineReducers, bindActionCreators} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';






const allReducers = combineReducers({movies, actors});

const store = createStore(allReducers, composeWithDevTools());
window.store = store;

// Creators for movies

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
