const { mainten } = require("../models");

class MaintenController {
  static async getMaintens(req, res) {
    try {
      let maintens = await mainten.findAll();

      res.json(maintens);
    } catch (err) {
      res.json(err);
    }
  }

  static async create(req, res) {
    try {
      const {
        idUser,
        alkes,
        visualCheck,
        testing,
        kesimpulan,
        keterangan,
        approval,
      } = req.body;

      let resultMainten = await mainten.create({
        idUser,
        alkes,
        visualCheck,
        testing,
        kesimpulan,
        keterangan,
        approval,
      });

      res.json(resultMainten);
    } catch (err) {
      res.json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = Number(req.params.id);

      let resmainten = await mainten.destroy({
        where: { id },
      });

      resmainten === 1
        ? res.redirect("/maintens")
        : res.json({
            message: `Pet id ${id} has not been deleted!`,
          });
    } catch (err) {
      res.json(err);
    }
  }

  
}

module.exports = MaintenController;
