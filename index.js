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
    const Data = data_users;

    //memberikan respon json data
    let result = {
        status: 200,
        data: Data,
    };

    res.json(result);
});

app.listen(port,() => console.log(`Server running on port ${port}`))