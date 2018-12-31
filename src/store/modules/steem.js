import { createAction, handleActions } from 'redux-actions';

// 액션 타입을 정의
export const GET_ACCOUNT = 'GET_ACCOUNT;

// 액션 생성 함수
export const getAccount = createAction(GET_ACCOUNT);

// defaultState 정의
const defaultState = {
  account: {}
};

// @ref: https://redux-actions.js.org/api/handleaction
export default handleActions({
  [GET_ACCOUNT]: (state, action) => {
    console.log(handleActions, {state, action});
    // 계정 정보 조회
    // return produce(state, draft => {
    //   console.log('produce', {state, draft});
    // });
  },
}, defaultState);

// 참고: https://github.com/erikras/ducks-modular-redux