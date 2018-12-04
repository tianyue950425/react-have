import React,{Component} from "react";
import css from "./index.module.scss";
import {NavLink} from "react-router-dom";
class Home extends Component{
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
				<li><NavLink to="/home/recommend" replace>
				推荐
				</NavLink></li>
				<li><NavLink to="/home/decoration" replace>
				家饰
				</NavLink></li>
				<li><NavLink to="/home/admission" replace>
				收纳
				</NavLink></li>
				<li><NavLink to="/home/kitchen" replace>
				餐厨
				</NavLink></li>
				<li><NavLink to="/home/textiles" replace>
				家纺
				</NavLink></li>
				<li><NavLink to="/home/furniture" replace>
				家具
				</NavLink></li>
			</ul>
			{this.props.children}
		</div>
	}
}
export default Home;