import axios from 'axios';

//根据环境变脸区分接口的默认地址
switch (process.env.NODE_ENV) {
    case 'production':
        //生产环境
        axios.defaults.baseURL = 'production/api';
        break;
    case 'test':
        //测试环境
        axios.defaults.baseURL = 'test/api';
        break;
    default:
        //开发环境
        axios.defaults.baseURL = '/api';
}

// 设置超时时间和跨域是否允许携带凭证
axios.defaults.timeout = 10000;
axios.defaults.withCreadentials = true;

axios.interceptors.response.use(
    response => {
        let res = response.data;
        // history模式下，获取到当前路由的path
        // let path = router.history.current.path
        if (res.status == 0) {
            return res.data;
        } else if (res.status == 10) {
            // 会刷新页面
            window.location.href = '/login';
            // 不会刷新页面
            // router.replace('/login');
            return Promise.reject(res);
        } else {
            // Message.warning(res.msg);
            alert(res.msg)
            return Promise.reject(res);
        }
    },
    error => {
        // let res = error.response;
        //   Message.error(res.data.message);
        return Promise.reject(error);
    }
);

export default axios;