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