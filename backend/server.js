const express = require('express')

const app = express();

app.get("/", (req, res) => {
    res.json({"users": ["A","B"]})
})

app.listen(3000, () => { console.log("Server listen to port 3000...")})