const express = require('express')
const app = express()
const port = 7895
const data_users = [
    { id: 1, name: "Ijong", komentar: "Bantuin dong" },
    { id: 2, name: "Yuuichi", komentar: "gantiin gw" },
    { id: 3, name: "Misterius", komentar: "Jakarta keren ya" },
    { id: 4, name: "Lala", komentar: "Pusing banget" },
];

app.get("/users", (req, res) => {
    //mendapatkan data dari database
    const data = data_users;

    //memberikan respon json data
    let result = {
        status: 200,
        data: data,
    };

    res.json(result);
});

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