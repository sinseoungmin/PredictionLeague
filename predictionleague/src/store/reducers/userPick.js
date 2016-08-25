export default function (state = {}, action) {

  switch (action.type) {
    case 'USERPICK':
      return action.userPick;


    case 'SINGLEUP':
      /* object key를 내가 원하는 대로 하기 위해서 아얘 객체 새로 만들어서 직접 넣음 */
      let newObject = {...state[action.idx].s};
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
      console.log('MULTIUP');
      return {
        ...state,
        m:[...m,action.pick]
      };


    case 'MULTIDOWN':
      console.log('MULTIDOWN');
      /*
      let arr = state;
      let newArr = arr.filter(function(el){
        return el.away !== action.game.away
      });
      return newArr;
      */

    case 'CALBALANCE':
      return [
        ...state.slice(0, action.idx),
        {...state[action.idx],balance: action.balance},
        ...state.slice(Number(action.idx)+1)
      ];
    default:
      return state;
  }
}
