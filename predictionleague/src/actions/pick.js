const pickUp = (game) =>{
	return {
		type:'PICKUP',
    	game
	};
}
const pickDown = (game) =>{
	return {
		type:'PICKDOWN',
    	game
	};
}

module.exports = {
	pickUp,
	pickDown
};
