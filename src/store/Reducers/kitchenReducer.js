const kitchenReducer = (prevState=[],action)=>{
	let{type,payload} = action;
	switch(type){
		case "kitchenList":
		return payload;
		default:
		return prevState
	}
}

export default kitchenReducer;