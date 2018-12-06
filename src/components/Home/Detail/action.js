import axios from 'axios';
const action = {
	myShowNavbar(){
		return {
			type:"ShowNavbar",
			payload:true
		}
	},
	myHideNavbar(){
		return {
			type:"HideNavbar",
			payload:false
		}
	}
}
export default action;