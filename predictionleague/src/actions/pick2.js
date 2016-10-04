const pickUp2 = (game) =>{
	return {
		type:'PICKUP2',
    	game
	};
}
const pickDown2 = (game) =>{
	return {
		type:'PICKDOWN2',
    	game
	};
}


module.exports = {
	pickUp2,
	pickDown2
};
