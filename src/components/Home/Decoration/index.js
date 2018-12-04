import css from './index.module.scss';
import React,{Component} from "react";
import axios from "axios";
import {connect} from "react-redux";
class Decoration extends Component{

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	list: [],
	  	istrue: false
	  };
	}

	render(){
		return (
			<div>
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
			)
	}
	componentDidMount(){
		this.props.getDecorationList()
		// console.log(this.props)
	}
	handleClick(id){
		this.props.history.push(`/detail/${id}`)
	}
}

export default connect((state)=>{
	console.log(state)
	return{
		list:state.decorationReducer
	}
},{
	getDecorationList(){
		return axios({
			url:'/api2/itemCategory/getCategoryItemsWithPreItem?parentCategoryId=6190730784899234253',
			methods:'get',
			headers:{
				'client-info':'appVersion=5.4&platform=wap&sign=gJtWqZm6tB03k0twPrn2PovXpq8=&timestamp=1543890399145'
			}
		}).then(res=>{
			// console.log(res)
			
			return{
				type:'homeDecoration',
				payload:res.data.data
			}
		})
	}
})(Decoration)