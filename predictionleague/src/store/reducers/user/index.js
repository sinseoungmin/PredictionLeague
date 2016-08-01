export default function (state = {}, action) {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, {
        logged: true,
        email: action.email
      });
      break;
    default:
      return state;
  }
}
