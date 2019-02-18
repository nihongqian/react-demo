import React,{Component} from 'react'
import './Classify.css'
import ProductList from "../../common/ProductList/ProductList";

import {connect} from 'react-redux';
import * as types from '../../store/types';
import asyncList from '../../store/actions/asyncList';

let sT = 0;
class Classify extends Component{
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
    let {home}=this.props;
    return (
      <div className="newsList">
        <ProductList list={home} dataName="home"/>
      </div>
    )
  }
}

const initMapStateToProps=state=>({
  home:state.home
});
const initMapDispatchToProps=dispatch=>({
  get:()=>dispatch(asyncList({
    url:'/data/product_list.data',
    type:types.UPDATE_HOME
  }))
});


export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Classify);