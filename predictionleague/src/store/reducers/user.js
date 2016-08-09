export default function (state = {}, action) {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, {
        login:true,
        email: action.email,
        id: action.id,
        nickName: action.nickName
      });
    default:
      return state;
  }
}
