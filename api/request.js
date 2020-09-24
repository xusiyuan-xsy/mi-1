function request(options) {
    
    
    return new Promise((resolve, reject) => {
        
        uni.request({
            url: options.url,
            method: options.method || 'get',
            data: options.data,
            success(res) {
                resolve(res.data);
            },
            fail(err) {
                reject(err)
            },
        })

    })
}

export default request;