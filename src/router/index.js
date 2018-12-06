import { HashRouter as Router , Route ,Redirect,Switch} from "react-router-dom";
import App from "../App"
import React from "react"
import {Provider} from "react-redux";
import store from "../store";
import Home from "../components/Home";
import Recommend from "../components/Home/Recommend";
import Decoration from "../components/Home/Decoration";
import Admission from "../components/Home/Admission";
import Kitchen from "../components/Home/Kitchen";
import Textiles from "../components/Home/Textiles";
import Furniture from "../components/Home/Furniture";
import Login from "../components/Login";
import Register from "../components/Register";
import Detail from "../components/Home/Detail";
const router = 
	<Provider store={store}>
		<Router>
		<App>		
			<Switch>
			<Route path="/home" component={()=>
				<Home>
					<Switch>
						<Route path="/home/recommend" component={Recommend}></Route>
						<Route path="/home/decoration" component={Decoration}></Route>
						<Route path="/home/admission" component={Admission}></Route>
						<Route path="/home/kitchen" component={Kitchen}></Route>
						<Route path="/home/textiles" component={Textiles}></Route>
						<Route path="/home/furniture" component={Furniture}></Route>
						<Route path="/home/detail/:id" component={Detail}></Route>
						<Redirect path="/home" to="/home/recommend"></Redirect>
					</Switch>
				</Home>
			}></Route>
			<Route path="/login" component={Login}></Route>
			<Route path="/register" component={Register}></Route>
			<Redirect path="" to="/home"></Redirect>
			</Switch>
			</App>
		</Router>
	</Provider>
export default router;