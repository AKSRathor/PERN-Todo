const express = require("express")
const app = express()
const cors = require("cors")
const db = require("./Models")
// Middleware
app.use(cors())
app.use(express.json())//Way to access req.body from client side

const port = 5000

const postRouter = require("./routes/Posts")
app.use("/posts", postRouter)

db.sequelize.sync().then(()=>{
    app.listen(5000, ()=>{
        console.log(`Apsp is working at port 5000`)
    })

})
