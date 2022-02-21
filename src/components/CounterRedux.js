import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {DecrementFunc, IncrementFunc} from "../redux/action/counterAction";

function CounterRedux(props) {

    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()

    const decrement=()=>{
        dispatch(DecrementFunc(5))
    }
    const increment = () => {
      dispatch(IncrementFunc())
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <div className="card mt-5">
                            <div className="card-header bg-dark text-white text-center">
                                Counter
                            </div>
                            <div className="card-body">
                                Count:{count}
                            </div>
                            <div className="card-footer d-flex justify-content-around">
                                <button className="btn btn-danger" onClick={decrement}>-</button>
                                <button className="btn btn-success" onClick={increment}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CounterRedux;