import React,{Component} from "react";
import css from "./index.module.scss";
import action from "./action";
import {connect} from 'react-redux';
import axios from 'axios'
class Detail extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	is:'a'
	  };
	}
	render(){
		return(
			<div className={css.Detail}>
				{this.state.is.itemDescImages?
					<ul className={css.list}>
						{this.state.is.itemDescImages.map(res=>{
							return 	<li key={res.itemDescImageId}>
								<img src={res.imageUrl}/>
							</li>
							})
						}
						{
							this.state.is.endTime
						}
					</ul>
					:null
				}
			</div>
		)
	}
	componentDidMount(){
		this.props.myHideNavbar()
		console.log(this.props.match.params.id)
		axios({
			url:`/api2/item/getItemDetail?itemId=${this.props.match.params.id}`,
			methods:'get',
			//client-info:appVersion=5.4&platform=wap&sign=dFYeHwJxoxHPazQb5LBJqFh3+AY=&timestamp=1544080701280
			//client-info:appVersion=5.4&platform=wap&sign=wNRCKAWwXsPJS7XX+r6zvtUANKI=&timestamp=1544081632153
			headers:{
				'client-info':'appVersion=5.4&platform=wap&sign=h0RycvddfoVcVKil39RwfFnGIxA=&timestamp=1544083928568'
			}
		}).then(res=>{
			console.log(res.data.data)
			this.setState({
				is:res.data.data
			})
			console.log(this.state.is)
		})
	}
	componentWillUnmount(){
		this.props.myShowNavbar()
		
	}
}
export default connect(null,
	action
)(Detail);