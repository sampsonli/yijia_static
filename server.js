/**
 * Created by lichun on 2017/6/27.
 */
const path = require('path')
const express = require('express')
const app = express()
app.use(express.static(path.join(__dirname, 'static')))
const port = 8001
app.listen(port, () => {
    console.log(`Listening at ${port}`)
})
