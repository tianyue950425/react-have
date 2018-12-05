import React,{Component} from "react";
import css from "./index.module.scss";
import {NavLink} from "react-router-dom";
import Swiper from "swiper";
class Home extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	bottom1:true,
	  	bottom2:false,
	  	bottom3:false,
	  	bottom4:false,
	  	bottom5:false,
	  	bottom6:false
	  };
	}
	render(){
		return <div>
			<div className={css.HomeTop}>
				<i className="iconfont icon-store"></i>
				<h2 className={css.logo}>好物</h2>
				<i className="iconfont icon-cart"></i>
				<i className="iconfont icon-gerenzhongxin" onClick={()=>
					window.location="#/login"
				}>
				</i>
			</div>
			<ul className={css.HomeNav}>
			<div className="swiper-container">
			    <div className="swiper-wrapper">
			    <li className="swiper-slide" onClick={()=>{
			    	this.setState({
			    		bottom1:true,
			    		bottom2:false,
			    		bottom3:false,
			    		bottom4:false,
			    		bottom5:false,
			    		bottom6:false
			    	})
			    }}><NavLink to="/home/recommend" replace className={this.state.bottom1?css.myactive:''}>
				推荐
				</NavLink></li>
				<li className="swiper-slide" onClick={()=>{
			    	this.setState({
			    		bottom1:false,
			    		bottom2:true,
			    		bottom3:false,
			    		bottom4:false,
			    		bottom5:false,
			    		bottom6:false
			    	})
			    }}><NavLink to="/home/decoration" replace className={this.state.bottom2?css.myactive:''}>
				家饰
				</NavLink></li>
				<li className="swiper-slide" onClick={()=>{
			    	this.setState({
			    		bottom1:false,
			    		bottom2:false,
			    		bottom3:true,
			    		bottom4:false,
			    		bottom5:false,
			    		bottom6:false
			    	})
			    }}><NavLink to="/home/admission" replace className={this.state.bottom3?css.myactive:''}>
				收纳
				</NavLink></li>
				<li className="swiper-slide" onClick={()=>{
			    	this.setState({
			    		bottom1:false,
			    		bottom2:false,
			    		bottom3:false,
			    		bottom4:true,
			    		bottom5:false,
			    		bottom6:false
			    	})
			    }}><NavLink to="/home/kitchen" replace className={this.state.bottom4?css.myactive:''}>
				餐厨
				</NavLink></li>
				<li className="swiper-slide" onClick={()=>{
			    	this.setState({
			    		bottom1:false,
			    		bottom2:false,
			    		bottom3:false,
			    		bottom4:false,
			    		bottom5:true,
			    		bottom6:false
			    	})
			    }}><NavLink to="/home/textiles" replace className={this.state.bottom5?css.myactive:''}>
				家纺
				</NavLink></li>
				<li className="swiper-slide" onClick={()=>{
			    	this.setState({
			    		bottom1:false,
			    		bottom2:false,
			    		bottom3:false,
			    		bottom4:false,
			    		bottom5:false,
			    		bottom6:true
			    	})
			    }}><NavLink to="/home/furniture" replace className={this.state.bottom6?css.myactive:''}>
				家具
				</NavLink></li>
			    </div>
			  </div>
				
			</ul>
			{this.props.children}
		</div>
	}
	componentDidMount(){
		var swiper = new Swiper('.swiper-container', {
		  slidesPerView: 5,
		  spaceBetween: 0,
		  pagination: {
		    el: '.swiper-pagination',
		    clickable: true,
		  }
		});
	}
}
export default Home;