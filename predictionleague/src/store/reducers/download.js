export default function (state = {}, action) {
  switch (action.type) {
    case 'GAMEINFO':
      return Object.assign({}, state, {
        gameInfo:action.gameInfo
      });
    default:
      return state;
  }
}
