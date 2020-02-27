import React from 'react';
import './App.css';
import MoviesContainer from "./app/movies/components/MoviesContainer";
import MoviesForm from "./app/movies/components/MoviesForm";
import ActorsContainer from "./app/actors/components/ActorsContainer";
import ActorsForm from "./app/actors/components/ActorsForm";

function App() {
    return (
        <div className="App">
            <div>
                <MoviesContainer/>
                <MoviesForm/>
            </div>
            <div>
                <ActorsContainer />
                <ActorsForm/>
            </div>
        </div>
    );
}

export default App;
