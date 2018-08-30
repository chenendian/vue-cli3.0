import axios from 'axios'
// const merge = require('webpack-merge')
let config = process.env; // 引入全局环境变量配置
export default {
	post(url, data = {}, headers = {}, isLogin = true) { // 对所有的请求进行集中化处理
		if (typeof headers == "boolean"){
			isLogin = headers;
		}
		return new Promise((resolve, reject) => {
			axios({
					method: 'post',
					url: config.VUE_APP_API_ROOT + url,
					data: data,
					timeout: 10000,
					// headers: merge({ // 根据项目需求来配置
					// 	"Content-Type":"application/json;charset=utf-8",
					// 	"userId": config.userId,
					// 	"source": config.source,
					// }, headers)
				})
				.then((d) => {
					if(d.status == 200) {
						resolve(d.data);
					} else {
						reject(d);
					}
				})
				.catch((e) => {
					reject(e);
				})
		})
	}
}