import css from './index.module.scss';
import React,{Component} from "react";
import axios from "axios";
import {connect} from "react-redux";
class Admission extends Component{
	render(){
		return <div>
			<img src={this.props.list.imageUrl}/>
			<div className={css.box}>
				{this.props.list.items?
					<ul className={css.list}>
						{this.props.list.items.map(res=>{
							return 	<li key={res.itemId} onClick={this.handleClick.bind(this,res.itemId)}>
								<img src={res.imageUrl}/>
								<p>{res.name}</p>
								<p>￥{res.minPrice}</p>
							</li>
						})}
					</ul>
					:null
				}
			</div>
		</div>
	}
	componentDidMount(){
		if(this.props.list.length == 0){
			this.props.getAdmissionList()
		}
	}
	handleClick(id){
		this.props.history.push(`/detail/${id}`)
	}
}
export default connect((state)=>{
	return{
		list:state.admissionReducer
	}
},{
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
})(Admission)