import React,{Component} from "react";
import css from "./index.module.scss";
class Login extends Component{
	render(){
		return <div className={css.box}>
			<div className={css.imgBox}>
				<img src="./have.png"/>
			</div>
			<form>
				<div>
					<i className="iconfont icon-account"/>
					<input name="phone" placeholder="请输入手机号"/>
				</div>
				<div>
					<i className="iconfont icon-bags"/>
					<input name="password" placeholder="请输入密码"/>
				</div>
				<button>登录</button>
			</form>
		</div>
	}
}
export default Login;