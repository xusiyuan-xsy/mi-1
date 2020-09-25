import request from "./request.js";

export function getTopMenuData(){
	return request({
		url:"http://localhost:3000/data"
	})
}