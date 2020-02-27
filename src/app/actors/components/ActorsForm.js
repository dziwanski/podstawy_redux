import React from "react";
import {connect} from 'react-redux'
import actions from "../duck/actions";

const ActorsForm = (props) => {

    let actorInput = React.createRef();

    const actorAdd = (event) => {
        event.preventDefault();
        props.add(actorInput.current.value);
    };

    return (
        <form onSubmit={actorAdd}>
            <input ref={actorInput}/>
            <button type="submit">Add actor</button>
        </form>
    );
};

const mapDispatchToProps = dispatch => ({
    add: actor => dispatch(actions.add(actor))
});

export default connect(null, mapDispatchToProps)(ActorsForm);