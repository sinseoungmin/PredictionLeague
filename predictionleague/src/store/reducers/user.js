export default function (state = {}, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login:true,
        email:action.email,
        id:action.id,
        imgUrl:action.imgUrl,
    		nickName:action.nickName,
    		team:action.team,
    		position:action.position,
    		cWinnings:action.cWinnings,
    		aRate:action.aRate,
    		maxOdds:action.maxOdds
      }
    case 'LOGOUT':
      return {
        ...state,
        login:false,
        email:'',
        id:'',
        imgUrl:'',
    		nickName:'',
    		team:'',
    		position:'',
    		cWinnings:'',
    		aRate:'',
    		maxOdds:''
      }
    default:
      return state;
  }
}
