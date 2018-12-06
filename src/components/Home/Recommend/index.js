import React,{Component} from "react";
import css from "./index.module.scss";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css"
import {NoticeBar} from 'antd-mobile';
import axios from "axios";
class Recommend extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	list:[]
	  };
	}	
	  	render(){
	  		return <div className={css.a}>
	                <div className={css.pht}>
	                  <div className="swiper-container zrr">
	                      <div className="swiper-wrapper">
	                  		<img className="swiper-slide" src="https://item.file.myhaowu.com/9e95b2d4-63fd-48eb-aa30-24cde27533cf?imageMogr2/thumbnail/640x"/>
	                       </div>
	                  </div>
	                </div>
	                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 200px'} }}>
	                     好物公告 关于退换货服务
	                </NoticeBar>
	                <div className={css.new}>
	                    <div className={css.title}>
	                        周一周四 - 新品首发
	                    </div>
	                    <div className={css.tit}>
	                        查看所有新品 >
	                    </div>
	                </div>
	                <div className={css.list}>
	                    <div className={css.top}>为你推荐</div>
	                    <div className={css.have}>
                        	{	                          
                          this.state.list.map(item=>
                             <div className={css.have1} key={item.itemId} onClick={this.handleClick.bind(this,item.itemId)}>                                                              
                                      <div className="swiper-container zrr">
                                          <div className="swiper-wrapper">                                         
                                              {
                                                item.itemImages.map(img=>
                                                  <img src={img.imageUrl} key={img.itemImageId} className="swiper-slide"/> 
                                                )
                                              }                                           
                                          </div>
                                          <div className="swiper-pagination"></div>
                                      </div>
                                      <div className={css.itname}>
                                          {item.name}
                                      </div>
                                      <div className={css.itdec}>
                                        
                                        {item.desc}
                                        
                                      </div>
                                      <div className={css.other}>
                                        <span>￥{item.minPrice}</span>
                                        <div className={css.btn} onClick={this.handleClick.bind(this,item.itemId)}>购买</div>
                                      </div>                                                                                    
                             </div>
	                            
                          )
	                        }
                  </div>

                </div>
                <div className={css.foot}></div>
  		</div>
  	}
  	componentDidMount(){
  		axios({
  			url:'/api2/item/getRecommendItemsListWithPreItem?number=0',
  			method:'get',
  			headers:{
  				'client-info':'appVersion=5.4&platform=wap&sign=X4Mqj9ng+3TDZUKA/dXA5OV1frQ=&timestamp=1543837634227'
  			}
  		}).then(res=>{
  			console.log(res.data.data)
  	        this.setState({
  	        list:res.data.data
  	      },()=>{
  	        var swiper =new Swiper('.zrr',{
  	            pagination: {
  	              el: '.swiper-pagination'
  	              
  	          }
  	        })
  	      })
  		})

  	 }
  	handleClick(id){
       this.props.history.push(`/home/detail/${id}`)
  }
}
export default Recommend;