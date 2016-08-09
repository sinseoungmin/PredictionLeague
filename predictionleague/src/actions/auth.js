const login = (email,id,nickName) =>{
	return {
		type:'LOGIN',
		email,
		id,
		nickName
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
