import React, {useReducer} from 'react';

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return {count: state.count + action.value}
        case "DECREMENT":
            return {count: state.count - 1}
        default : return state
    }
}

function UseReducer2(props) {
    const [state, dispatch] = useReducer(reducer, {count: 0})
    return (
        <div>
            <button onClick={() => {
                dispatch({type: "INCREMENT", value: 2})
            }}>ADD
            </button>
            <h2>{state.count}</h2>
            <button onClick={() => {
                dispatch({type: "DECREMENT"})
            }}>DECREMENT
            </button>
        </div>
    );
}

export default UseReducer2;