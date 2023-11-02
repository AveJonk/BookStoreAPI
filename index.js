const express = require("express");
// const { Client } = require("pg");

//download masukin pg admin dulu ke VSC dengan cara npm install pg
const app = express();
const port = 7895;
app.use(express.json());
const router = require("./routes/index");
app.use(router);

//sambungin pgadmin ke VSC
// const client = new Client({
//   user: "postgres",
//   host: "localhost",
//   database: "book_store_api",
//   password: "root",
//   port: 5432,
// });

// // //cek apakah pgadmin sudah tersambung
// // client
// //   .connect()
// //   .then(() => {
// //     console.log("Terhubung ke database Postgre");
// //   })
// //   .catch((error) => {
// //     console.error("Gagal terhubung ke postgre");
// //   });

// app.get("/users/:id", async (req, res) => {
//   let id = parseInt(req.params.id);

//   //konek dengan database
//   client
//     .connect()
//     .then(() => {
//       console.log("Terhubung ke database Postgre");
//     })
//     .catch((error) => {
//       console.error("Gagal terhubung ke postgre");
//     });

//   //ambil data
//   client.query(
//     'SELECT id, judul, penerbit, deskripsi, gambar FROM public."Perpustakaan";',
//     [id],
//     (req, result) => {
//       res.json(result.rows);
//     }
//   );
// });

// // app.get("/users/:id", async (req, res) => {});

// app.post("/users", async (req, res) => {
//   let data = req.body;

//   const query =
//     'INSERT INTO public."Perpustakaan"(id, judul, penerbit, deskripsi, gambar) VALUES ($1, $2, $3, $4, $5);';

//   client.query(
//     query,
//     [data.id, data.judul, data.penerbit, data.deskripsi, data.gambar],
//     (err, result) => {
//       if (err) {
//         console.error("Error executing insert:", err);
//         return res.status(500).json({ error: "Terjadi kesalahan " + err });
//       } else {
//         res.json({
//           message: "Data berhasil dimasukan",
//         });
//       }
//     }
//   );
// });

app.listen(port, () => console.log(`Server running on port ${port}`));
