import React,{Component} from 'react'
import Loadable from 'react-loadable';
import asyncComponent from '../api/asyncComponent';


import Header from "../common/Header/Header";
import Home from "./Home/Home";
import Footer from "../common/Footer/Footer";
import Error from "../common/Error/Error";

// import Detail from "./Detail/Detail";
// import Follow from "./Follow/Follow";

// const Follow = Loadable({
//   loader: () => import('./Follow/Follow'),
//   loading:()=>{return null}
// });
// const Follow = asyncComponent(()=>import('./Follow/Follow'));

import Car from "./Car/Car";
import Classify from "./Classify/Classify";
import User from "./User/User";
import Login from "./Login/Login";
import Reg from "./Reg/Reg";

import {Route,Redirect,Switch} from 'react-router-dom';
import Auth from "../guard/Auth";
import Loading from "../common/Loading/Loading";

import {connect} from 'react-redux';
import * as types from '../store/types';

const Detail = Loadable({
  loader: () => import('./Detail/Detail'),
  loading:()=>{return null}
});
const Follow = asyncComponent(()=>import('./Follow/Follow'));


class App extends Component{
  componentWillReceiveProps(nextProps){

    // console.log(nextProps.location.pathname);

    //监听路由
    let path = nextProps.location.pathname;
    this.watchRouter(path)

        // window.scrollTo(0,0);//每次切换路由都滚动到顶部
  }
  watchRouter(path){
    let {viewHeader,viewFoot}=this.props;
    if (/home|follow|classify/.test(path)){
      // this.setState({bNav:true,bFoot:true})
      viewHeader(true);viewFoot(true)
    }
    if (/user|car/.test(path)){
      // this.setState({bNav:false,bFoot:true})
      viewHeader(false);viewFoot(true)
    }
    if (/login|reg|detail/.test(path)){
      // this.setState({bNav:false,bFoot:false})
      viewHeader(false);viewFoot(false)
    }
  }

  componentDidMount(){
    let path = this.props.location.pathname;
    this.watchRouter(path)
  }

  render(){
    let {bHeader,bFoot,bLoading} = this.props;
    return (
      <>
              {/* {this.state.bLoading && <Loading/>}
              {this.state.bNav && <Header/>}   */}
        {bLoading && <Loading/>}
        {bHeader && <Header/>}
        <Switch>
          <Route path='/home' component={Home} />
          
          <Route path="/follow" component={Follow} />

          <Route path='/classify' component={Classify} />
          <Route path='/car' component={Car} />
          {/* <Route path='/user' component={User} /> */}
          <Auth path="/user" component={User} />

          <Route path='/login' component={Login} />
          <Route path='/reg' component={Reg} />
          <Route path="/detail/:id" component={Detail} />
          <Redirect exact from='/' to='/home' />
          <Route component={Error} />
        </Switch>
        {/* {this.state.bFoot && <Footer/>} */}
        {bFoot && <Footer/>}
      </>
    )
  }
}

const initMapStateToProps = state=>({
  bHeader:state.bHeader,
  bFoot:state.bFoot,
  bLoading:state.bLoading
})

const initMapDispatchToProps = dispatch=>({
  viewHeader:(bl)=>dispatch({type:types.VIEW_HEADER,payload:bl}),
  viewFoot:(bl)=>dispatch({type:types.VIEW_FOOT,payload:bl})
})
export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(App);