export default function (state = [], action) {

  switch (action.type) {
    case 'PICKUP2':
      return [...state,action.game];
    case 'PICKDOWN2':
      let arr = state;
      let newArr = arr.filter(function(el){
        return el.away !== action.game.away
      });
      return newArr;
    case 'PICK2CLEAN':
      return [];
    default:
      return state;
  }
}
