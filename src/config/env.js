/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 老项目域名地址
 * khglUrl: 客户管理域名地址
 * dicUrl : 字典服务器地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * welUrl :默认欢迎页
 * 
 */


let baseUrl = '';
let routerMode = '';

if (process.env.NODE_ENV == 'development') {
	baseUrl = `http://zll.tunnel.echomod.cn`;
} else if (process.env.NODE_ENV == 'production') {
	baseUrl = `http://192.168.0.12:8070`;
}

export { baseUrl, routerMode }