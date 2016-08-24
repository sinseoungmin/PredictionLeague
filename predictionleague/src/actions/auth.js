const login = (email,id,imgUrl,nickName,team,position,cWinnings,aRate,maxOdds) =>{
	return {
		type:'LOGIN',
		email,
		id,
		imgUrl,
		nickName,
		team,
		position,
		cWinnings,
		aRate,
		maxOdds
	};
}

const logout = ()=>{
	return {
		type:'LOGOUT'
	}
}


module.exports = {
	login,
	logout
};
