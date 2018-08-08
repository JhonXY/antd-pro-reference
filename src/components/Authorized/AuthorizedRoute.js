import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Authorized from './Authorized';

// class AuthorizedRoute extends React.Component {
//   render() {
//     // 1. Component是用于生成路由实质jsx的方法，在@/common/router.js
//     // 中28行左右返回的一个接收props的函数，通过懒加载获取真实的组件，
//     // 再通过createElement创建路由节点，具有Component则说明则是一个有实际访问页面的路由
//     const { component: Component, render, authority, redirectPath, ...rest } = this.props;
//     console.log('这是一块路由信息！')
//     console.log('待处理的props', this.props)
//     console.log('用于创建jsx的', Component)
//     console.log('提供了控制权限的', authority)
//     console.log('这个render是啥', render && render())
//     // 其中authority为整理从menu.js和route.js中整理来的权限值，为一个string或一个array
//     return (
//       <Authorized
//         authority={authority}
//         // 默认的redirectPath为"/exception/403" 
//         // noMatch中传入预备作为验证不通过时跳转的路由
//         noMatch={<Route {...rest} render={() => <Redirect to={{ pathname: redirectPath }} />} />}
//       >
//         <Route {...rest} render={props => {
//           // Component与render不会同时具有
//           // 具有Component的是有实体Route的路由，有render的是无实体Route的路由（即是否有页面显示）
//           return (Component ? <Component {...props} /> : render(props))
//         }} />
//       </Authorized>
//     );
//   }
// }

const AuthorizedRoute = props => {
  const { component: Component, render, authority, redirectPath, ...rest } = props;

  return (
    <Authorized
      authority={authority}
      noMatch={<Route {...rest} render={() => <Redirect to={{ pathname: redirectPath }} />} />}
    >
      <Route {...rest} render={props => {
        return (Component ? <Component {...props} /> : render(props))
      }} />
    </Authorized>
  );
}

export default AuthorizedRoute;
