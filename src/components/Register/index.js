import React,{Component} from "react";
import css from "./index.module.scss";
import axios from "axios";
class Register extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	isShow:false
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
						用户名：<input name="username" placeholder="请输入用户名" className="username" onBlur={this.handleBlur.bind(this)}/>
					</div>
					{
						this.state.isShow?<span>内容不能为空</span>:''
					}
					<div>
						密码： <input name="password" placeholder=" 请输入密码"/>
					</div>
					<button>立即注册</button>
				</form>
			</div>
			)
	}
	handleBlur(){
		var input = document.querySelector('.username');
		var inputVal = document.querySelector('.username').value;
			if(inputVal === ''){
				console.log('aaaaaaaaaaaa')
				this.setState({
					isShow:true
				})
			}else{
				axios({
					url:'',
					method:'post',
					params:{
						username:inputVal
					}
				})
			}
	}
}
export default Register;