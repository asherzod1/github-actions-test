import './App.css';
import UseReducerr from "./components/UseReducerr";
import UseReducer2 from "./components/UseReducer2";
import CounterRedux from "./components/CounterRedux";
import {Provider} from "react-redux";
import {store} from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            {/*<UseReducerr />*/}
            {/*  <UseReducer2 />*/}
            <CounterRedux/>
        </Provider>
    );
}

export default App;
