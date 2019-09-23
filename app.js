const app = require('express')()


//routers
const indexRoute = require('./routes/index')
app.use('/api', indexRoute)

let port = process.env.port || 3000
app.listen(port, () => {
    console.log("App is running on " + port)
})