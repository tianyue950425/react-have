import css from './index.module.scss';
import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import action from './action';
import { ActivityIndicator} from 'antd-mobile';
class Decoration extends Component{
	constructor(props) {
	  super(props);
	  this.state = {
		isShow:true
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

				{
					this.state.isShow?
					<ActivityIndicator
					  toast
					  text="Loading..."
					  animating={true}
					/>
					:null
				}
					
			</div>
			)
	}
	componentDidMount(){
		if(this.props.list.length == 0){
			this.props.getDecorationList();
			// setTimeout(()=>{
			// 	this.setState((prev)=>{
			// 		console.log(prev.animating)
			// 			return {
			// 				animating:false
			// 			}
			// 	})
			// },1000)
			
		}
	}
 n
	componentWillReceiveProps(nextProps){
		
			this.setState({
				isShow:false
			})	
			console.log("有")
		
	}
	handleClick(id){
		this.props.history.push(`/detail/${id}`)
	}
}

export default connect((state)=>{
	console.log(state.decorationReducer)
	return{
		list:state.decorationReducer

	}
},action)(Decoration)