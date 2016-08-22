const pickUp1 = (game) =>{
	return {
		type:'PICKUP1',
    game
	};
}
const pickDown1 = (game) =>{
	return {
		type:'PICKDOWN1',
    game
	};
}


module.exports = {
	pickUp1,
	pickDown1
};
