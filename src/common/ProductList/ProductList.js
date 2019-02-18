import React from 'react';
import './ProductList.css';
import {Link} from 'react-router-dom';

const List = ({list,dataName}) => (
  <div className="newsList">
    <ul className="pattern-list">
      {
        list.map(item=>(
          <li className="mui-card-footer" key={item.id}>
            <div className="mui-card">
            <Link to={{pathname:'/detail/'+item.id,search:'?dataName='+dataName}}>
                <div className="mui-card-header mui-card-media" style={{"height":"40vw"}}><img src={item.url} alt=""/></div>
                <div className="mui-card-content">
                  <div className="mui-card-content-inner">
                  <p style={{"color": "#333"}}>{item.title}</p>
                  </div>
                </div>
                <div className="pattern-list__p">
                  <p className="font-color-pink"><label>{item.price}</label></p>
                  <p>库存<label>{item.oldprice}</label></p>
                </div>
              </Link>
            </div>
            <div className="mui-card">
            <Link to={{pathname:'/detail/'+item.id,search:'?dataName='+dataName}}>
                <div className="mui-card-header mui-card-media" style={{"height":"40vw"}}><img src={item.url} alt=""/></div>
                <div className="mui-card-content">
                  <div className="mui-card-content-inner">
                  <p style={{"color": "#333"}}>{item.title}</p>
                  </div>
                </div>
                <div className="pattern-list__p">
                  <p className="font-color-pink"><label>{item.price}</label></p>
                  <p>库存<label>{item.oldprice}</label></p>
                </div>
              </Link>
            </div>
          </li>

        ))
      }
    </ul>

  </div>
);

export default List;