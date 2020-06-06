/*
      JSP(View) => DispatcherServlet => Model
      =========    =================    =====
        React          store            reducer
        function
 */
import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";// 비동기화
import rootReducer from '../reducers'
import {createLogger} from "redux-logger/src";

const logger=createLogger();
const initialState={}

const middleware=[thunk,logger];

const store=createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
export default store;