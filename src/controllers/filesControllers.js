const { ErrorsDB } = require("../utils/Errors/errorsDB");
const Files = require("../models/Files");

module.exports = {
  filesController: async (req, res) => {
    const { originalname: name, size, key, location: url = "" } = req.file;

    try {
      const files = await Files.create({
        name,
        size,
        key,
        url,
      });

      res.status(200).send({
        message: "Arquivos enviados com sucesso",
        file: files,
      });
    } catch (error) {
      console.log(error);
      throw new ErrorsDB("Não foi possivel criar arquivos");
    }
  },
};
