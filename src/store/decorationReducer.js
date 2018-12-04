const decorationReducer = (prevState=[],action={})=>{
	let{type,payload} = action;
	switch(type){
		case "homeDecoration":
		return payload;
		default:
		return prevState
	}
}

export default decorationReducer;