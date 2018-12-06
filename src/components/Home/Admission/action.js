import axios from 'axios'
const action = {
	getAdmissionList(){
		return axios({
			url:'/api2/itemCategory/getCategoryItemsWithPreItem?parentCategoryId=6190731324979770213',
			methods:'get',
			headers:{
				'client-info':'appVersion=5.4&platform=wap&sign=0TIx24j2NJ6lsW+lzvv9vr3bKmA=&timestamp=1543926246810'
			}
		}).then(res=>{
			console.log(res.data)
			return{
				type:'admissionList',
				payload:res.data.data
			}
		})
	}
}
export default action;