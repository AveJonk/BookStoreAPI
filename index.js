const express = require('express')
const app = express()
const port = 7895


app.get("/", (req, res) => {
    res.json({
        message: "Hallo ini response json",
    });
});

app.get("/tuturut", (req, res) => {
    res.json({
        message: "Yo wassap ini tuturut 1",
    });
});

app.post("/tuturut", (req, res) => {
    res.json({
        message: "Yo wassap ini tuturut 2",
    });
});

app.put("/tuturut", (req, res) => {
    res.json({
        message: "Yo wassap ini tuturut 3",
    });
});

app.delete("/tuturut", (req, res) => {
    res.json({
        message: "Yo wassap ini tuturut",
    });
});

app.listen(port,() => console.log(`Server running on port ${port}`))