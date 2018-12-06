const homeNavReducer = (prevState=true,action)=>{
	let{type,payload} = action;
	switch(type){
		case "ShowNavbar":
		return payload;
		case "HideNavbar":
		return payload;
		default:
		return prevState
	}
}

export default homeNavReducer;