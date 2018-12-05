const admissionReducer = (prevState=[],action)=>{
	let{type,payload} = action;
	switch(type){
		case "admissionList":
		return payload;
		default:
		return prevState
	}
}

export default admissionReducer;