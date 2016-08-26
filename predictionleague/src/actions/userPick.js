const singleUp = (idx, stake, pick) =>{
	return {
		type:'SINGLEUP',
    pick,
		idx,
		stake
	};
}
const singleDown = (idx, key, pick) =>{
	return {
		type:'SINGLEDOWN',
    pick,
		idx,
		key
	};
}
const multiUp = (idx, stake, game, odds, mIdx) =>{
	return {
		type:'MULTIUP',
    idx,
		stake,
		game,
		odds,
		mIdx
	};
}
const multiDown = (pick) =>{
	return {
		type:'MULTIDOWN',
    pick
	};
}
const calBalance = (idx, balance) =>{
	return{
		type:'CALBALANCE',
		idx,
		balance
	};
}

module.exports = {
	singleUp,
  singleDown,
  multiUp,
  multiDown,
	calBalance
};
