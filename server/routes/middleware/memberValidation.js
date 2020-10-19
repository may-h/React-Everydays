const sequelize = require("../../util/sequelize");

const valication = async (req, res, next) => {
  const number = req.params.number || undefined;
  const result = await sequelize.findAll("member", { phone: { [Op.like]: "%" + number + "%" } });
  console.log("middleware result - > " + result);
  console.log("number -> ", number);

  if (!number) next(new Error("번호가 존재하지 않습니다."));
  next();
};

module.exports = valication;
