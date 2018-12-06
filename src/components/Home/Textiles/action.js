import axios from 'axios';
const action = {
	getTextilesList(){
		return axios({
			url:'/api2/itemCategory/getCategoryItemsWithPreItem?parentCategoryId=6190729743922102435',
			methods:'get',
			headers:{
				'client-info':'appVersion=5.4&platform=wap&sign=XWh0YHqZw/obLeHzZE/2mdaDy3A=&timestamp=1543970799796'
			}
		}).then(res=>{
			console.log(res.data.data)
			return{
				type:'textilesList',
				payload:res.data.data
			}
		})
	}
}
export default action