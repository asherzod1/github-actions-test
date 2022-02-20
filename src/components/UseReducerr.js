import React, {useReducer} from 'react';


function reducer(state, action){
    if(action.type === "INCREMENT"){
        return {count: state.count + 1}
    }
    if(action.type === "DECREMENT"){
        return {count: state.count -1}
    }
}
function UseReducerr(props) {
    const [state, dispatch] = useReducer(reducer, { count:0 })
    return (
        <div>
            <button onClick={()=>dispatch({type:"INCREMENT"})}>Add</button>
            <h2>{state.count}</h2>
            <button onClick={()=>dispatch({type:"DECREMENT"})}>Subtract</button>
        </div>
    );
}

export default UseReducerr;