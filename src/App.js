import React from 'react';
import './App.css';
import MoviesContainer from "./app/movies/components/MoviesContainer";
import MoviesForm from "./app/movies/components/MoviesForm";

function App() {
    return (
        <div className="App">
            <MoviesContainer/>
            <MoviesForm/>
        </div>
    );
}

export default App;
