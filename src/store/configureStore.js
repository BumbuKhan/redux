import { createStore, applyMiddleware } from 'redux'
import rootReduces from '../reducers'

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState);

    return store;
}