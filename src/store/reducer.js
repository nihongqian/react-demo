
import * as types from './types';
// const reducer = (state,action)=>{
//     let {type,payload}=action;  
// ==>
const reducer = (state,{type,payload})=>{
  // console.log(payload)
    switch (type) {
        case types.VIEW_HEADER:
            return {
                ...state,
                bHeader:payload
            };
        case types.VIEW_FOOT:
            return {
                ...state,
                bFoot:payload
            }
        case types.VIEW_LOADING:
            return {
              ...state,
              bLoading:payload
            };

        case types.UPDATE_HOME:
            return {
              ...state,
              home:payload
            };
      
        case types.UPDATE_FOLLOW:
            return {
              ...state,
              follow:payload
            };
      
        case types.UPDATE_DETAIL:
            // console.log('reducer',payload);
            return {
              ...state,
              detail:payload.data[payload.id-1]
            };
            
        case types.CHECK_USER:
            let bl = {auth:false};
            if(payload.data){
              let list = payload.data;
              let username = payload.username;
              let password = payload.password;
              list.forEach((item,index)=>{
                if(item.data.username===username && item.data.password === password) {
                  bl = list[index];
                  return null;
                }
              })
            }else{
              bl=payload
            }
            return {
              ...state,
              user:bl
            };
        case types.RED_NUMBER:
          let redarr = [...state.buyCar]
          redarr.forEach((item,index)=>{
            if(item.id===payload.id){
                let a = item.number--
                if(a==1){
                    item.number=1
                }
            }
          })  
          return {
            ...state,
            buyCar:redarr
          }
            
        case types.ADD_ITEM ://添加购物车
          let find = false;
          let arr = [...state.buyCar];

          arr.forEach((item,index) => {
            if(item.id === payload.id){
              find=true;
              item.number++;
            }
          })
          if(!find){
            payload.number=1;
            arr.push(payload);
          }
          return Object.assign({},state,{
            buyCar:arr
          })
        case types.REMOVE_ITEM://去除一个商品
          state.buyCar.forEach((item,index)=>{
            if(item.id===payload.id){
              state.buyCar.splice(index,1);
            }
          })
          return Object.assign({},state,{
            buyCar:[...state.buyCar]
          });
          case types.ADD_NUMBER:
          let addarr=[...state.buyCar]
          addarr.forEach((item,index)=>{
              if(item.id===payload.id){
                  item.number++
                //   arr.splice(index,1,item)
              }
          })
          return {
              ...state,
              buyCar:addarr
          }
        case types.REMOVE_ALL://清空购物车 
          return Object.assign({},state,{
            buyCar:[]
          });
        default:
            return state
    }
}

export default reducer;