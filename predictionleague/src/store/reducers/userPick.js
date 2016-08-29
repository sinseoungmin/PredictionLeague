export default function (state = {}, action) {

  switch (action.type) {
    case 'USERPICK':
      return action.userPick;


    case 'SINGLEUP':
      /* object key를 내가 원하는 대로 하기 위해서 아얘 객체 새로 만들어서 직접 넣음 */
      let newObject = (state[action.idx]? (state[action.idx].s? {...state[action.idx].s} : {}) : {});
      let key = action.pick.away+'_'+action.pick.home;
      let value = {
        win:action.pick.win,
        stake:action.stake,
        odds:action.pick.odds,
        hit:'yet'
      };
      newObject[key] = value;

      return [
        ...state.slice(0, action.idx),
        {...state[action.idx],s: newObject},
        ...state.slice(Number(action.idx)+1)
      ];

    case 'SINGLEDOWN':
      let downObject = {...state[action.idx].s};
      let downKey = action.key;
      delete downObject[downKey];

     return [
       ...state.slice(0, action.idx),
       {...state[action.idx],s: downObject},
       ...state.slice(Number(action.idx)+1)
     ];


    case 'MULTIUP':
      /* object key를 내가 원하는 대로 하기 위해서 아얘 객체 새로 만들어서 직접 넣음 */
      let newObject2 = (state[action.idx]? (state[action.idx].m? {...state[action.idx].m} : {}) : {});
      let key2 = action.mIdx;
      let value2 = {
        game:action.game,
        stake:action.stake,
        odds:action.odds,
        hit:'yet'
      };
      newObject2[key2] = value2;

      return [
        ...state.slice(0, action.idx),
        {...state[action.idx],m: newObject2},
        ...state.slice(Number(action.idx)+1)
      ];

    case 'MULTIDOWN':
      let downObject2 = {...state[action.idx].m};
      let downKey2 = action.key;
      delete downObject2[downKey2];

     return [
       ...state.slice(0, action.idx),
       {...state[action.idx],m: downObject2},
       ...state.slice(Number(action.idx)+1)
     ];


    case 'CALBALANCE':
      return [
        ...state.slice(0, action.idx),
        {...state[action.idx],balance: action.balance},
        ...state.slice(Number(action.idx)+1)
      ];


    case 'LOGOUT':
      return [];


    default:
      return state;
  }
}
