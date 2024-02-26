const mongoose = require('mongoose')

const ConnectDb = async (url) => {
    await mongoose.connect(url)
    .then(res => {
        if(process.env.MODE === 'production') {
            console.log('Cloud mongoDb connected')
        }else if(process.env.MODE === 'development'){
            console.log('Local mongoDb connected')
        }
    }).catch(err => console.log(err))
}

module.exports = ConnectDb