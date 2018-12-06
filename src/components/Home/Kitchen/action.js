import axios from 'axios';
const action = {
	getKitchenList(){
		return axios({
			url:'/api2/itemCategory/getCategoryItemsWithPreItem?parentCategoryId=6213289609490295040',
			methods:'get',
			headers:{
				'client-info':'appVersion=5.4&platform=wap&sign=rnxkamwye9grRtQVcQhvC38n0rc=&timestamp=1543969908292'
			}
		}).then(res=>{
			console.log(res.data.data)
			return{
				type:'kitchenList',
				payload:res.data.data
			}
		})
	}
}
export default action;