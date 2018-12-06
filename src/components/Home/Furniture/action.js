import axios from 'axios'
const action = {
	getFurnitureList(){
		return axios({
			url:'/api2/itemCategory/getCategoryItemsWithPreItem?parentCategoryId=6366951817334532959',
			methods:'get',
			headers:{
				'client-info':'appVersion=5.4&platform=wap&sign=6kfac3JkEgYqvtKygB+tVWf9P3Q=&timestamp=1543971213137'
			}
		}).then(res=>{
			console.log(res.data.data)
			return{
				type:'furnitureList',
				payload:res.data.data
			}
		})
	}
}
export default action;