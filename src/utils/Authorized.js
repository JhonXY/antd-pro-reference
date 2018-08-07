import RenderAuthorized from '../components/Authorized';
import { getAuthority } from './authority';

// 此处传入 currentAuthority = getAuthority() 参数，该参数应该是一个string
// ./authority默认定义的函数表示该从localstorage中获取相关信息返回一个string
// 也可以将 getAuthority 返回一个函数，交由renderauthorized中执行
let Authorized = RenderAuthorized(getAuthority()); // eslint-disable-line

// Reload the rights component
// 表示重新验证一次权限
const reloadAuthorized = () => {
  Authorized = RenderAuthorized(getAuthority());
};

export { reloadAuthorized };

/** 该处返回的 Authorized 相当于 
* import renderAuthorize from '@/components/Authorized/renderAuthorize';
* import Authorized from '@/components/Authorized/Authorized';
* renderAuthorize(Authorized)(getAuthority())
*/
export default Authorized;
