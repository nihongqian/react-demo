import React,{Component} from 'react'
import List from "../../common/List/List";
import './Follow.css'
import asyncList from "../../store/actions/asyncList";
import * as types from "../../store/types";
// import {connect} from 'react-redux';
import connect from 'react-redux/es/connect/connect';

let sT=0;
class Follow extends Component{
  // constructor(props){
  //   super();
  //   props.get();
  // }

  componentDidMount(){
    this.props.get();
    window.scrollTo(0,sT)
  }
  componentWillUnmount(){
    sT = document.documentElement.scrollTop
  }
  render(){
    return (
      <div className="newsList">
        <List list={this.props.follow} dataName="follow"/>
      </div>
    )
  }
}
const initMapStateToProps=state=>({
  follow:state.follow
});
const initMapDispatchToProps=dispatch=>({
  get:()=>dispatch(asyncList({
    url:'/data/follow.data',
    type:types.UPDATE_FOLLOW
  }))
});


export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Follow);