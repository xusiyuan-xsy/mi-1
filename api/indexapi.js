import request from "./request.js";

export function getTopMenuData(){
	return request({
		url:"https://www.easy-mock.com/mock/5d763ae7b201051865e7dc4e/example/indexapi"
	})
}