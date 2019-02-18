import React,{Component} from 'react'
import style from './Reg.module.css';
import {Link} from "react-router-dom";
class Reg extends Component{
  render(){
    return (
      <div className={style.content}>
        <p className="fhbtn"><a href="javascript:window.history.go(-1);"></a></p>
        <h1></h1>
        <div className={style["login-box"]}>
          <p className={style.lsolid}></p>
          <div className={style.login}>
            <Link to="/login">登录</Link>
            <span></span>
            <Link to="/reg">注册</Link>
          </div>
          <p className={style.lsolid}></p>
        </div>
        <ul>
          <li className={style.lifirst}>
            <input type="text"/>
            <span>帐号</span>
          </li>
          <li>
            <input type="text"/>
            <span>密码</span>
          </li>
        </ul>
        <div className={style.footbox}>
          <input type="button" value="注 册" className={style["login-btn"]}/>
          <a href="javascript:;" className={style.tishi}>忘记密码？</a>
        </div>
      </div>
    )
  }
}
export default Reg;