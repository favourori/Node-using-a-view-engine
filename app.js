const app = require('express')()


//Importing routes
const indexRoute = require('./routes/index')


//using routes
app.use('/', indexRoute)



//Spin up dev Server
let port = process.env.port || 3000
app.listen(port, () => {
    console.log("App is running on " + port)
})