import {createStore,combineReducers ,applyMiddleware, compose} from "redux";// createStore 创建store对象
import promiseMid from "redux-promise";
import decorationReducer from "./Reducers/decorationReducer";
import admissionReducer from "./Reducers/admissionReducer";
import kitchenReducer from "./Reducers/kitchenReducer";
import textilesReducer from "./Reducers/textilesReducer";
import furnitureReducer from "./Reducers/furnitureReducer"
const reducer = combineReducers({
	decorationReducer,
	admissionReducer,
	kitchenReducer,
	textilesReducer,
	furnitureReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
   applyMiddleware(promiseMid)
));
export default store;