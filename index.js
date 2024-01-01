const express = require('express')
const notesRouter = require('./routers/notes')

const app = express()
app.use(express.json())


app.use(notesRouter)




app.listen(3000,()=>{
    console.log('server is up on port 3000')
})