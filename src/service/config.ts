/**
 * 
 * 接口地址配置文件
 */

//easy-mock模拟数据接口地址
// const MOCK_API = 'https://react-admin-mock.now.sh/api';
const MOCK_API = '/mock';
export const MOCK_AUTH_ADMIN = MOCK_API + '/admin.js'; // 管理员权限接口
export const MOCK_AUTH_VISITOR = MOCK_API + '/visitor.js'; // 访问权限接口
/** 服务端异步菜单接口 */
export const MOCK_MENU = MOCK_API + '/menu.js';
export const DEV_MOCK_MENU = MOCK_API + '/devmenu.js';
/** 三维数据展示图 */
export const DATA_API = MOCK_API + '/nutrients.js';

// github授权
export const GIT_OAUTH = 'https://github.com/login/oauth';
// github用户
export const GIT_USER = 'https://api.github.com/user';

// bbc top news
export const NEWS_BBC =
    'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=429904aa01f54a39a278a406acf50070';
