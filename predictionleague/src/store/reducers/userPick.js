export default function (state = {}, action) {

  switch (action.type) {
    case 'DOWNLOAD':
      console.log('userPick DOWNLOAD');
      return action.userPick;
    case 'SINGLEUP':
      console.log('SINGLEUP');
      return {
        ...state,
        s:[...s,action.pick]
      };
    case 'SINGLEDOWN':
      console.log('SINGLEDOWN');
      return;
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
    default:
      return state;
  }
}
