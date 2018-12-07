import React,{Component} from "react";
import css from "./index.module.scss";
import axios from "axios";
class Register extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	isShow:false,
	  	isFalse:false,
	  	isNull:false
	  };
	}
	render(){
		return(
			<div className={css.box}>
				<div className={css.imgBox}>
					<img src="./have-text-logo.png"/>
				</div>
				<form>
					<div>
						用户名：<input type="text" name="username" placeholder="请输入用户名" className="username" onBlur={this.handleBlur.bind(this)}/>
					</div>
					{
						this.state.isShow?<span>用户名不合法</span>:null
					}
					{
						this.state.isFalse?<span>用户名不可用</span>:null
					}
					{
						this.state.isNull?<span>用户名密码不能为空</span>:null
					}
					<div>
						密码： <input type="password" name="password" placeholder=" 请输入密码" className="password"/>
					</div>
					<button type="button" onClick={this.handleClick.bind(this)}>立即注册</button>
					{
						this.state.isShow?<div className={css.Box}></div>:null
					}
				</form>
			</div>
			)
	}
	handleBlur(){
		var input = document.querySelector('.username');
		var inputVal = document.querySelector('.username').value;
		var valReg = /^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{2,3}$/;
		/*if(inputVal)*/
			if(valReg.test(inputVal)){
				axios.post('/api/checkusername',{
					username:inputVal
				}).then(res=>{
					if(res.data){
						this.setState({
							isFalse:false
						})
					}else{
						this.setState({
							isFalse:true
						})
					}
				})
				this.setState({
					isShow:false
				})
			}else{
				this.setState({
					isShow:true
				})
			}
	}
	handleClick(){
		var usernameVal = document.querySelector('.username').value;
		var passwordVal = document.querySelector('.password').value;
		if(usernameVal!==''&& passwordVal!==''){
			axios.post('/api/registeruser',{
				username:usernameVal,
				password:passwordVal
			}).then(res=>{
				console.log(res.data);
				if(res.data){
					alert("注册成功");
					
					window.location.href='/home'
					
				}else{
					alert("注册失败")
				}
			})
		}else{
			this.setState({
				isNull:true
			})
			setTimeout(() => {
				  this.setState({
					isNull:false
				})
			}, 1500)
		}
		
	}
}
export default Register;