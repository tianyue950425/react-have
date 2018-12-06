import axios from 'axios'
const action = {
	getDecorationList(){
		return axios({
			url:'/api2/itemCategory/getCategoryItemsWithPreItem?parentCategoryId=6190730784899234253',
			methods:'get',
			headers:{
				'client-info':'appVersion=5.4&platform=wap&sign=gJtWqZm6tB03k0twPrn2PovXpq8=&timestamp=1543890399145'
			}
		}).then(res=>{
			return{
				type:'homeDecoration',
				payload:res.data.data
			}
			
		})
	}
}
export default action;