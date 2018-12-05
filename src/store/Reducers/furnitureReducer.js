const furnitureReducer = (prevState=[],action)=>{
	let{type,payload} = action;
	switch(type){
		case "furnitureList":
		return payload;
		default:
		return prevState
	}
}

export default furnitureReducer;