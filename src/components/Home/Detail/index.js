import React,{Component} from "react";
import css from "./index.module.scss";
import action from "./action";
import {connect} from 'react-redux';
import axios from "axios";
class Detail extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	list:[]
	  };
	}
	render(){
		return(
			<div className={css.Detail}>
				detail
			</div>
			)
	}
	componentDidMount(){
		this.props.myHideNavbar()
		console.log(this.props.match.params.id)
		axios({
			url:'api2/item/getItemDetail?itemId=6443350951980000268',
			method:'get',
			headers:{
				'client-info':'appVersion=5.4&platform=wap&sign=uS70hefUTUujQ8uZGmicF7HWZgc=&timestamp=1544079794021'
			}
		}).then(res=>{
			console.log(res)
			this.setState({
			 
			})
		})
	}
	componentWillUnmount(){
		this.props.myShowNavbar()
		
	}
}
export default connect(null,
	action
)(Detail);