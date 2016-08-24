const download = (userPick) =>{
  return {
    type:'DOWNLOAD',
    userPick
  }
}
const singleUp = (pick) =>{
	return {
		type:'SINGLEUP',
    pick
	};
}
const singleDown = (pick) =>{
	return {
		type:'SINGLEDOWN',
    pick
	};
}
const multiUp = (pick) =>{
	return {
		type:'MULTIUP',
    pick
	};
}
const multiDown = (pick) =>{
	return {
		type:'MULTIDOWN',
    pick
	};
}

module.exports = {
	download,
	singleUp,
  singleDown,
  multiUp,
  multiDown
};
