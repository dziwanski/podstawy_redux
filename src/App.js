import React from 'react';
import './App.css';
import {createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers';
import {movieActions} from "./app/movies/duck";


const store = createStore(rootReducer, composeWithDevTools());
window.store = store;

store.dispatch(movieActions.add('Rambo V'));

function App() {
    return (
        <div className="App">
            <header className="App-header">

            </header>
        </div>
    );
}

export default App;
