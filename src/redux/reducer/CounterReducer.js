import {DECREMENT, INCREMENT} from "../action/actionType";


const initialState={
    count:0
}
export default function (state = initialState, action) {
    switch (action.type){
        case DECREMENT:
            return {
                ...state,
                count: state.count - action.value
            }
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        default: return state
    }
}