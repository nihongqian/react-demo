import React from 'react';

export default function asyncComponent(importComponent) {
  class AsyncComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();
      /*importComponent().then(
        res=>setSTate({component:res})
      )*/
      this.setState({
        component: component
      });


      /*try{
        // 被测试的代码
        const { default: component } = await importComponent();
      }catch (e) {
        console.log('e错误类型',e)
        //处理，给用户的反馈
      }*/


    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}