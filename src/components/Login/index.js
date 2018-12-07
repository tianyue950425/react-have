import React,{Component} from "react";
import css from "./index.module.scss";
import {NavLink} from "react-router-dom";
import axios from "axios"
class Login extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	isShow:false
	  };
	}
	render(){
		return (
		<div className={css.box}>
			<div className={css.imgBox}>
				<img src="./have.png"/>
			</div>
			<form>
				<div>
					<input type="text" name="username" placeholder="请输入用户名" className="username"/>
				</div>
				<div>
					<input type="password" name="password" placeholder="请输入密码" className="password" />
				</div>
				{
					this.state.isShow?<span>用户名或密码错误</span>:null
				}
				<button type="button" onClick={this.handleClick.bind(this)}>登录</button>
			</form>
			<ul>
				<li><NavLink to="/register">注册</NavLink></li>
				<li><NavLink to="/">忘记密码?</NavLink></li>
			</ul>
		</div>
		)
	}
	handleClick(){
		var usernameVal = document.querySelector('.username').value;
		var passwordVal = document.querySelector('.password').value;
		axios.post('/api/loginuser',{
			username:usernameVal,
			password:passwordVal
		}).then(res=>{
			console.log(res);
			if(res.data){
				alert("登录成功");
				setTimeout(() => {
				  window.location.href='/home'
				}, 1000)
			}else{
				this.setState({
					isShow:true
				})
			}
		})
	}
}
export default Login;