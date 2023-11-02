const { Buku } = require("../models");
const findAllBooks = async (req, res) => {
  const data = await Buku.findAll();

  res.json({
    message: "here from router ",
    data: data,
  });
};

const detailBooks = async (req, res) => {
  let id = parseInt(req.body.id);

  const data = await Buku.findByPk(id);

  res.json({
    message: "here from router ",
    data: data,
  });
};

const tambahBuku = async (req, res) => {
  try {
    const data = req.body;
    const result = await Buku.create(data);

    res.json({
      result: result,
    });
  } catch (error) {
    res.json({
      message: "error : " + error,
    });
  }
};

const bunuhBuku = async (req, res) => {
    try {
      const data = req.body.id;
      await Buku.destroy({
        where: {
            id: data,
        },
      });
  
      res.json({
        message:"buku telah dibakar"
      });
    } catch (error) {
      res.json({
        message: "error : " + error,
      });
    }
  };

  const updateBuku = async (req, res) => {
    try {
      const id = req.body.id;
      const data = req.body;
      await Buku.update(data, {
        where: {
          id: id    
        }
      });
  
      res.json({
        message:"buku telah diupdate",
        data: data
      });
    } catch (error) {
      res.json({
        message: "error : " + error,
      });
    }
  };
  
module.exports = { findAllBooks, detailBooks, tambahBuku, bunuhBuku, updateBuku };
