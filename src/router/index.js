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
const router = 
	<Provider store={store}>
		<Router>
		<App>
			<Redirect path="/" to="/home"></Redirect>
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
						<Redirect path="/home" to="/home/recommend"></Redirect>
					</Switch>
				</Home>
			}></Route>
			<Route path="/login" component={Login}></Route>
			</Switch>
			</App>
		</Router>
	</Provider>
export default router;