import { combineReducers } from 'redux';

import { reducer as state } from './state';

const rootReducer = combineReducers({
    state
});

export default rootReducer;