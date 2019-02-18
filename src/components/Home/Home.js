import React,{Component} from 'react'
import ProductList from '../../common/ProductList/ProductList';
import ReactSwipe from 'react-swipe';

import banner1 from './img/banner1.jpg';
import tit from '../../assets/images/hometit1.jpg';
import './Home.css';

import {connect} from 'react-redux';
import * as types from "../../store/types";
import asyncList from "../../store/actions/asyncList";

let sT = 0;
class Home extends Component{
  constructor(props){
    super();
    props.get();
  }
  componentDidMount(){  //加载前读取位置
    window.scrollTo(0,sT)
  }
  componentWillUnmount(){ //卸载前记录位置
    sT = document.documentElement.scrollTop;
  }
  render(){
    let {home} = this.props;
    return (
      <div className="Home">
          <ReactSwipe
          className="carousel"
          swipeOptions={{
            continuous: true,
            auto: 2000,
            
          }}
          >
          <div> <img src={banner1} alt=""/> </div>
          <div> <img src={require("./img/banner2.jpg")} alt=""/> </div>
          <div> <img src={banner1} alt=""/> </div>
          <div> <img src={require("./img/banner2.jpg")} alt=""/> </div>
        </ReactSwipe>
        <div className="mui-content new-pattern-con">
          <ul className="mui-table-view mui-grid-view mui-grid-12 pattern-con-icon">
              <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="javascript:;">
                      <span className="mui-icon iconfont icon-remenshangpin"></span>
                      <div className="mui-media-body">热门商品</div></a></li>
              <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="javascript:;">
                      <span className="mui-icon-extra mui-icon-extra-new"></span>
                      <div className="mui-media-body">新款推荐</div></a></li>
              <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="javascript:;">
                      <span className="icon iconfont icon-yushou-huang"></span>
                      <div className="mui-media-body">预售款</div></a></li>
              <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="javascript:;">
                      <span className="icon iconfont icon-fendi_shuangjianbao"></span>
                      <div className="mui-media-body">双肩包</div></a></li>
              <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="javascript:;">
                      <span className="icon iconfont icon-dabaozhuang"></span>
                      <div className="mui-media-body">大包&小包</div></a></li>
              <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="javascript:;">
                      <span className="icon iconfont icon-qianbao"></span>
                      <div className="mui-media-body">钱包&手拿包</div></a></li>
              <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="javascript:;">
                      <span className="icon iconfont icon-prada_danjianbao"></span>
                      <div className="mui-media-body">单肩包&斜跨</div></a></li>
              <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><a href="javascript:;">
                      <span className="icon iconfont icon-gucci_shoutibao"></span>
                      <div className="mui-media-body">手提包</div></a></li>
          </ul> 
        </div>
        <img className="home-imgtit" src={tit} alt="" />

        <ul className="pattern-list">
		
          <ProductList list={home} dataName="home"/>

				</ul>
        
      </div>
    )
  }
}

const initMapStateToProps=state=>({
  home:state.home
})

const initMapDispatchToProps=dispatch=>({
  get:()=>dispatch(asyncList({
    url:'/data/product_list.data',
    type:types.UPDATE_HOME
  }))
})

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Home);