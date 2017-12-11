module.exports = {
    port: 3000,
    session:{
        secret: 'myblog',
        key:'myblog',
        maxAge:3000000000
    },
   mongodb: 'mongodb://localhost:14701/myblog'
}