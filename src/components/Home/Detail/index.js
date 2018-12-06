import React,{Component} from "react";
import css from "./index.module.scss";
import action from "./action";
import {connect} from 'react-redux';
class Detail extends Component{
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
	}
	componentWillUnmount(){
		this.props.myShowNavbar()
		
	}
}
export default connect(null,
	action
)(Detail);