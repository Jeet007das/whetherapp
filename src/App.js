import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";

import { rootReducer } from "./redux/reducers/index.js";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

let composeArgs = [applyMiddleware(thunk)];
if (process.env.REACT_APP_NODE_ENV !== "PROD") {
	composeArgs.push(window.devToolsExtension && window.devToolsExtension());
}

const storeEnhancers = compose(...composeArgs);

const store = createStore(persistedReducer, {}, storeEnhancers);

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Main />
			</div>
		</Provider>
	);
}

export default App;
