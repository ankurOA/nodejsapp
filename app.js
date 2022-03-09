const express = require('express')
const app = express()
const port = 9734

app.get('/send', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
