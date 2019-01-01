import { combineReducers } from 'redux';
import steem from './steem';

// # combineReducers : 리듀서 합치기
// 여러개의 리듀서가 있을 때, 
// redux의 combineReducers 함수를 사용하여 하나의 리듀서로 합칠 수 있다. 
// 이렇게 합쳐진 리듀서는 루트 리듀서 라고 부른다.
export default combineReducers({
  steem,
});