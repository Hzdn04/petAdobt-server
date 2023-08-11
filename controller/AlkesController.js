const { alkes } = require("../models");

class AlkesController {
  static async getAlkeses(req, res) {
    try {
      let alkeses = await alkes.findAll({
        order: [["id", "ASC"]],
      });

      res.status(200).json({ data: alkeses});
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async detail(req, res) {
    try {
      const id = +req.params.id;
      let alkesDetail = await alkes.findByPk(id);

      alkesDetail
        ? res.status(200).json( { data: alkesDetail} )
        : res.status(404).json({ message: `Alkes not found` });
    } catch (error) {
      req.status(500).json(error);
    }
  }

  static async delete(req, res) {
    const id = +req.params.id;
    let deleteAlkes = await alkes.destroy({ where: { id } });

    deleteAlkes === 1
      ? res.status(200).json({ message: `Alkes has been deleted` })
      : res.status(400).json({ message: `Alkes not deleted` });
  }
}

module.exports = AlkesController;
