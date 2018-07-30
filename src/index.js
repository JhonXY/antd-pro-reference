import './polyfill';
import dva from 'dva';

import createHistory from 'history/createHashHistory';
// user BrowserHistory
// import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';
import 'moment/locale/zh-cn';
import './rollbar';

import './index.less';
// 1. Initialize
// 使用hash路由的方式来控制路由
const app = dva({
  history: createHistory(),
});

// 2. Plugins
// 添加能够自动添加loading状态值的插件
app.use(createLoading());

// 3. Register global model
// 注册全局model
app.model(require('./models/global').default);

// 4. Router
// 获取RouterConfig函数,此处将当前app，以及history相关的信息传入该函数
// 用于生成整个router系统
app.router(require('./router').default);

// 5. Start
// 将该app渲染到根节点上
app.start('#root');

export default app._store; // eslint-disable-line
