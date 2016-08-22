export default function (state = [], action) {
  switch (action.type) {
    case 'GAMEINFO':
      return action.gameInfo;
    default:
      return state;
  }
}
