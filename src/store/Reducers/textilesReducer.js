const textilesList = (prevState=[],action)=>{
	let{type,payload} = action;
	switch(type){
		case "textilesList":
		return payload;
		default:
		return prevState
	}
}

export default textilesList;