import { createAction, handleActions } from 'redux-actions';
// import steem from 'steem';
// import { Client } from 'dsteem';

// const client = new Client('https://api.steemit.com');

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

function _fetchAccountAsync(userId) {
  return fetch('https://api.steemit.com',
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({jsonrpc:"2.0", method:"condenser_api.get_accounts", params:[[userId]], id:1})
    })
    .then(res => {
      if(res.ok) {
        res.json().then(json => {
          if(json && json.result && json.result.length ) {
            let [ account ] = json.result;
            account.json_metadata = JSON.parse(account.json_metadata);
            // console.log(account)
            return account;
          }
        });
      } else {
        return {};
      }
    })
    .catch(error => { 
      console.log(error);
      return {};
    });
}

// handleActions 의 첫번째 파라미터는 액션을 처리하는 함수들로 이뤄진 객체이고
// 두번째 파라미터는 초기 상태입니다.
// @ref: https://redux-actions.js.org/api/handleaction
export default handleActions({
  [GET_ACCOUNT]: async (state, action) => {
    // console.log('handleActions:', {state, action});
    // 계정 정보 조회
    const { type, payload: userId } = action;
    console.log('userId', userId);

    // curl -s --data '{"jsonrpc":"2.0", "method":"condenser_api.get_accounts", "params":[["anpigon"]], "id":1}' https://api.steemit.com
    // steem.api.getAccountsAsync([userId]).then(result => console.log(err, result));
    // client.database.getAccounts([ userId ]).then(result => console.log('getAccounts', result));
    const account = await _fetchAccountAsync(userId);
    console.log('account', account);
    const newState = {
      ...state,
      account,
    };
    console.log('newState', newState);
    return newState;
  },
}, initialState);

// 참고: https://github.com/erikras/ducks-modular-redux