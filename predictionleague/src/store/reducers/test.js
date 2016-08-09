export default function (state = [], action) {
  switch (action.type) {
    case 'SET_SHOPLIST':
      return action.list;
      break;
    case 'CLEAR_SHOPLIST':
      return [];
      break;
    default:
      return state;
  }
}
