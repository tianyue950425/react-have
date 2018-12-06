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
					<input name="username" placeholder="请输入用户名"/>
				</div>
				<div>
					<input name="password" placeholder="请输入密码"/>
				</div>
				<button>登录</button>
			</form>
			<ul>
				<li><NavLink to="/register">注册</NavLink></li>
				<li><NavLink to="/">忘记密码?</NavLink></li>
			</ul>
		</div>
		)
	}
}
export default Login;