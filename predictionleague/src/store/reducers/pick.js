export default function (state = [], action) {

  switch (action.type) {
    case 'PICKUP':
      return [...state,action.game];
    case 'PICKDOWN':
      let arr = state;
      let newArr = arr.filter(function(el){
        return el.away !== action.game.away
      });
      return newArr;
    case 'PICKCLEAN':
      return [];
    default:
      return state;
  }
}
