import Authorized from './Authorized';
import AuthorizedRoute from './AuthorizedRoute';
import Secured from './Secured';
import check from './CheckPermissions.js';
import renderAuthorize from './renderAuthorize';

Authorized.Secured = Secured;
// 作为高阶组件时使用调用该方法作为jsx使用
Authorized.AuthorizedRoute = AuthorizedRoute;
// 不做高阶组件使用，通过直接验证的方式使用时调用该方法
Authorized.check = check;

// renderAuthorize在此处获取到第一个参数即 Authorized 组件
// 并且初始化了以供之后使用的常量 CURRENT 来方便得获取当前的权限名
export default renderAuthorize(Authorized);
