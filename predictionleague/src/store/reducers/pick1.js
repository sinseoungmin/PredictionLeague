export default function (state = [], action) {

  switch (action.type) {
    case 'PICKUP1':
      return [...state,action.game];
    case 'PICKDOWN1':
      let arr = state;
      let newArr = arr.filter(function(el){
        return el.away !== action.game.away
      });
      return newArr;
    default:
      return state;
  }
}
