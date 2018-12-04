import React,{Component} from "react";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css"
import css from "./index.module.scss";
import {NoticeBar} from 'antd-mobile';
import axios from "axios";
class Center extends Component{
    constructor(props) {
      super(props);
    
      this.state = {
      	datalist:[],
      	list:[]
      };
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
            var swiper =new Swiper('.swiper-container',{
              pagination: {
                el: '.swiper-pagination',
              }
            })
          })
    	})

     }
	render(){
		return <div className={css.a}>
              <div className={css.pht}>
                <img src="https://item.file.myhaowu.com/9e95b2d4-63fd-48eb-aa30-24cde27533cf?imageMogr2/thumbnail/640x"/>
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
                  <div className={css.have} >
                      {
                        this.state.list?
                        this.state.list.map(item=>
                           <div key={item.itemId}>                            
                                  
                                    <div className="swiper-container">
                                        <div className="swiper-wrapper">
                                          {
                                              item.itemImages.map(img=>
                                                <img src={img.imageUrl} key={img.itemImageId}/> 
                                              )
                                          } 
                                        </div>
                                        <div className="swiper-pagination"></div>
                                    </div> 
                                                                                          
                           </div>
                        )
                    :null
                  }
                </div>
              </div>
             {/*<Carousel afterChange={this.handleChange}>
            {
             this.state.list.map(item=>
               <li key={item.itemId} onClick={this.handleClick.bind(this,item.itemId)}>
                     <div>
                       {
                        item.itemCategories.map(ite=>
                          <img src={ite.imageUrl} key={ite.itemCategoryId}/>
                        )
                       }
                     </div>
               </li>
             )
            }
               </Carousel>*/}
		</div>
	}
}

export default Center;