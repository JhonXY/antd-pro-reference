/* eslint-disable import/no-mutable-exports */
let CURRENT = 'NULL';
/**
 * use  authority or getAuthority
 * @param {string|()=>String} currentAuthority
 */
// 该方法需要通过 renderAuthorize(Authorized)(currentAuthority) 进行调用
// 最终会修改能够 import { CURRENT } 访问到的 CURRENT 和 返回传入的 Authorized
const renderAuthorize = Authorized => {
  return currentAuthority => {
    if (currentAuthority) {
      // 如果传入一个函数，则执行该函数，返回的值作为CURRENT
      if (currentAuthority.constructor.name === 'Function') {
        CURRENT = currentAuthority();
      }
      // 如果传入一个string或array则直接设置为CURRENT
      if (
        currentAuthority.constructor.name === 'String' ||
        currentAuthority.constructor.name === 'Array'
      ) {
        CURRENT = currentAuthority;
      }
    } else {
      CURRENT = 'NULL';
    }
    return Authorized;
  };
};

export { CURRENT };
export default Authorized => renderAuthorize(Authorized);
