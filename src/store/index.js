import { createStore, applyMiddleware } from 'redux';
import modules from './modules';

import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const logger = createLogger();

// 스토어 만들어서 내보내기
const store = createStore(modules, applyMiddleware(logger, ReduxThunk));
export default store;