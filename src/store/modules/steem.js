import { createAction, handleActions } from 'redux-actions';

// @ref: https://velopert.com/3533
// 하나의 파일에 모두 작성하는 것은 Ducks 구조라고 한다.

// 액션 타입을 정의해줍니다.
export const GET_ACCOUNT = 'GET_ACCOUNT';

// 액션 생성 함수를 만듭니다.
export const getAccount = createAction(GET_ACCOUNT);

// 모듈의 초기 상태를 정의합니다.
const initialState = {
  account: {}
};

function _getAccount() {

}

// handleActions 의 첫번째 파라미터는 액션을 처리하는 함수들로 이뤄진 객체이고
// 두번째 파라미터는 초기 상태입니다.
// @ref: https://redux-actions.js.org/api/handleaction
export default handleActions({
  [GET_ACCOUNT]: (state, action) => {
    console.log(handleActions, {state, action});
    // 계정 정보 조회
    // return produce(state, draft => {
    //   console.log('produce', {state, draft});
    // });
  },
}, initialState);

// 참고: https://github.com/erikras/ducks-modular-redux