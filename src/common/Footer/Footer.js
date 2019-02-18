import React from 'react';
import style from './Footer.module.css'

import {NavLink} from 'react-router-dom'

const Footer = (props) => (
  <div className={style["nav-footer"]}>
		<li>
			<NavLink to={{pathname: '/home'}} activeClassName={style["icon-active"]}><span className="mui-icon mui-icon-home" ></span></NavLink>	
			<NavLink to={{pathname: '/home'}} activeClassName={style["icon-active"]}>首页</NavLink>
		</li>
		<li>
			<NavLink to={{pathname: '/classify'}} activeClassName={style["icon-active"]}><span className="mui-icon mui-icon-list"></span></NavLink>	
			<NavLink to={{pathname: '/classify'}} activeClassName={style["icon-active"]}>分类</NavLink>
		</li>
		<li>
			<NavLink to={{pathname: '/car'}} activeClassName={style["icon-active"]}><span className="mui-icon mui-icon-extra mui-icon-extra-cart"></span></NavLink>				
			<NavLink to={{pathname: '/car'}} activeClassName={style["icon-active"]}>购物车</NavLink>
		</li>
		<li>
			<NavLink to={{pathname: '/user'}} activeClassName={style["icon-active"]}><span className="mui-icon mui-icon-contact"></span></NavLink>						
			<NavLink to={{pathname: '/user'}} activeClassName={style["icon-active"]}>个人中心</NavLink>
		</li>
	</div>
);

export default Footer