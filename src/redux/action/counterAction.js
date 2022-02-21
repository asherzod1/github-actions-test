import {DECREMENT, INCREMENT} from "./actionType";


export const DecrementFunc =(value)=>dispatch=>{
    dispatch({
        type:DECREMENT,
        value: value
    })
}
export const IncrementFunc = () => dispatch =>{
    dispatch({
        type:INCREMENT
    })
}