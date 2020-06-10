import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import reducers from './src/store/reducers/index';
import watcher from './src/store/saga/index';
import createSagaMiddleware from 'redux-saga';
import Home from './src/components/Home';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(watcher);

class App extends Component {
	render() {
		return (
			<>
				<Provider store={store}>
					<Home/>
				</Provider>
			</>
		);
	}
}

export default App;
