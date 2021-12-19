const request = require('postman-request')


const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        request
            .get({ url }, (err, res) => {
                if (err) {
                    // console.log("ERROR", err)
                    reject(err)
                }
                
                //console.log("RESPONSE BODY", res.body)
                resolve(res.body)
            })
    })
}

module.exports = fetchData