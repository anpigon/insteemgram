import { createStore } from 'redux';
import modules from './modules';

// 스토어 만들어서 내보내기
const store = createStore(modules);
export default store;