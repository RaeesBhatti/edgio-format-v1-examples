const express = require('express')
const app = express()
const port = process.env.PORT || 3010;

app.get('/', (req, res) => {
    res.send(req.headers);
})

if (!process.env.EDGIO_ENVIRONMENT_NAME) {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
}

module.exports = {app};
