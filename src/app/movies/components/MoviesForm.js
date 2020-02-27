import React from "react";
import {connect} from 'react-redux'
import actions from "../duck/actions";

const MoviesForm = (props) => {

    const movieInput = React.createRef();

    const addMovie = (event) => {
        event.preventDefault();
        // Wlasciwosc add jest definiowana w mapDispatchToProps
        props.add(movieInput.current.value);
    };

    return <form onSubmit={addMovie}>
        <input ref={movieInput}/>
        <button type="submit">Add movie</button>
    </form>
};

// actions.add jest to akcja z actions.js. Jest to jedyny element sluzacy do dodawania elementow do store.
const mapDispatchToProps = dispatch => ({
    add: movie => dispatch(actions.add(movie))
});

export default connect(null, mapDispatchToProps)(MoviesForm);