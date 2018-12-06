import React,{Component} from "react";
import css from "./index.module.scss";
import {NavLink} from "react-router-dom"
class Login extends Component{
	render(){
		return (
		<div className={css.box}>
			<div className={css.imgBox}>
				<img src="./have.png"/>
			</div>
			<form>
				<div>
					<i className="iconfont icon-account"/>
					<input name="phone" placeholder="请输入手机号" className="phone"/>
				</div>
				<div>
					<i className="iconfont icon-bags"/>
					<input name="password" placeholder="请输入密码" className="password"/>
				</div>
				<button>登录</button>
			</form>
			<ul>
				<li><NavLink to="/register">手机号注册</NavLink></li>
				<li><NavLink to="/forget">忘记密码</NavLink></li>
			</ul>
		</div>
		)
	}
}
export default Login;