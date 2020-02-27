import React from 'react';
import './App.css';
import MoviesContainer from "./app/movies/components/MoviesContainer";
import MoviesForm from "./app/movies/components/MoviesForm";
import ActorsContainer from "./app/actors/components/ActorsContainer";

function App() {
    return (
        <div className="App">
            <div>
                <MoviesContainer/>
                <MoviesForm/>
            </div>
            <div>
                <ActorsContainer />
            </div>
        </div>
    );
}

export default App;
