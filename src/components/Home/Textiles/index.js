import css from './index.module.scss';
import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import action from './action'
class Textiles extends Component{
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
		if(this.props.list.length == 0){
			this.props.getTextilesList();
		}
	}
	handleClick(id){
		this.props.history.push(`/home/detail/${id}`)
	}
}
export default connect((state)=>{
	return{
		list:state.textilesReducer
	}
},action)(Textiles)