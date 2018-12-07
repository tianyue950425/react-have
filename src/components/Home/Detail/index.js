import React,{Component} from "react";
import css from "./index.module.scss";
import action from "./action";
import {connect} from 'react-redux';
import axios from "axios";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css"
import { ActivityIndicator} from 'antd-mobile';
class Detail extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	list:[],
	  	loading:true
	  };
	}
	render(){
		return(
			<div className={css.Detail}>
               <div className={css.img1}>
	            {
	            	this.state.list.itemImages?
	                <div className="swiper-container zrr">
		                <div className="swiper-wrapper">
		                     {
		                     	this.state.list.itemImages.map(ite=>{

	                               return <img className="swiper-slide" src={ite.imageUrl} key={ite.imageUrl}/>
		                     	})
		                     	
		                     }
	                    </div>
	                    <div className="swiper-pagination"></div>
	                </div>
	            	:null
	            }
	            </div>
	            <div className={css.det}>
	                <div className={css.text}>{this.state.list.name}</div>
	                <div className={css.price}>￥{this.state.list.maxPrice}</div>
	                <div className={css.col}>
	                     <ul>
	                        <li>30天无忧退货</li>	                        
	                        <li>20小时内发货</li>	                        
	                        <li>满88全场包邮</li>	                        
	                     </ul>
	                </div>
	            </div>
	            <div className={css.fix}>
                    规格数量
	            </div>
	            <div className={css.ques}>
                    <p className={css.qu1}>推荐理由</p>
                    <p className={css.qu2}>{this.state.list.desc}</p>
	            </div>
                {this.state.list.itemDescImages?
                	<ul className={css.list}>
                		{this.state.list.itemDescImages.map(res=>{
                			return 	<li key={res.itemDescImageId}>
                				<img src={res.imageUrl}/>
                			</li>
                			})
                		}
                	</ul>
                	:null
                }

                <div className={css.foot}></div>
                <div className={css.bot}>
                     <div className={css.bar}>
                        <button className={css.btn1}>加入购物车</button>
                        <button className={css.btn2}>立即购买</button>
                     </div>
                </div>
                <ActivityIndicator
                  toast
                  text="Loading..."
                  animating={this.state.loading}
                />	
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
			console.log(res.data.data.itemImages)
			this.setState({
			   list:res.data.data
			},()=>{
				var swiper=new Swiper('.zrr',{
					pagination:{
						el:'.swiper-pagination'
					}
				})
				this.setState({
					loading:false
				})
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