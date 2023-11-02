const { Buku } = require("../models");
const CariSemuaBuku = async (req, res) => {
  const data = await Buku.findAll();

  res.json({
    message: "ini adalah semua buku",
    data: data,
  });
};

const detailBuku = async (req, res) => {
  let id = parseInt(req.params.id);

  const data = await Buku.findByPk(id);

  res.json({
    message: "ini adalah detail buku yang kamu inginkan ",
    data: data,
  });
};

const tambahkanBukuBaru = async (req, res) => {
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

const BakarBuku = async (req, res) => {
  try {
    const data = req.params.id;
    await Buku.destroy({
      where: {
        id: data,
      },
    });

    res.json({
      message: "buku telah dibakar",
    });
  } catch (error) {
    res.json({
      message: "error : " + error,
    });
  }
};

const KoreksiBuku = async (req, res) => {
  try {
    const id = req.body.id;
    const data = req.body;
    await Buku.update(data, {
      where: {
        id: id,
      },
    });

    res.json({
      message: "buku telah diupdate",
      data: data,
    });
  } catch (error) {
    res.json({
      message: "error : " + error,
    });
  }
};

module.exports = {
  CariSemuaBuku,
  detailBuku,
  BakarBuku,
  KoreksiBuku,
  tambahkanBukuBaru,
};
