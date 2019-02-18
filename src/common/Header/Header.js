import React from 'react';
import style from './Header.module.css'
import {NavLink} from 'react-router-dom'

const Header = (props) => (
  <div className={style["top-header"]}>
    <div className={style.centerflex}>
      <a href="javascript:;" style={{"position":"absolute","left":'27px',"top":'5px'}}><i className="icon  iconfont icon-sousuo1" style={{"fontSize":'18px'}}></i></a>
      <input type="text" placeholder='连衣裙就是你的女人味儿' style={{"width":"270px","marginLeft":'12px',"border":'0px',"borderRadius":'20px',"fontSize":'15px',"paddingLeft":'50PX',"height":'30px',"marginTop":"7px"}}/>
    </div>
		<NavLink to={'/follow'}>
			<span className="icon iconfont icon-xiaoxi" style={{"position":"absolute","right":'43px',"top":"8px","fontSize":'30px'}}></span>
		</NavLink>
		<NavLink to={'/car'}>
			<span className="icon iconfont icon-gouwuche1" style={{"position":"absolute","right":'10px',"top":"8px","fontSize":'30px'}}></span>
		</NavLink>
  </div>
);

export default Header