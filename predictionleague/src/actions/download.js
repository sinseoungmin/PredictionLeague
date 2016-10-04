const gameInfo = (gameInfo) =>{
	return {
		type:'GAMEINFO',
    	gameInfo
	};
}
const userPick = (userPick) =>{
  return {
    type:'USERPICK',
    userPick
  }
}

module.exports = {
	gameInfo,
	userPick
};
