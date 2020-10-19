const { Attendance, Memo, Payment } = require("../models");
const { User, Member, Company } = require("../models");

const getFindOne = async (model, condition) => {
  let query = { where: condition };
  console.debug(
    `[DEBUG][getFindOne] query - ${model} | ${JSON.stringify(query)}`
  );
  try {
    let data;
    switch (model) {
      case "user":
        data = await User.findOne(query);
        break;
      case "member":
        data = await Member.findOne(query);
        break;
      case "company":
        data = await Company.findOne(query);
        break;
      case "attendance":
        data = await Attendance.findOne(query);
        break;
      case "memo":
        data = await Memo.findOne(query);
        break;
      case "payment":
        data = await Payment.findOne(query);
        break;
    }
    console.debug(`[DEBUG][getFindOne] data - ${data}`);
    return data;
  } catch (err) {
    console.error(
      `[ERROR][getFineOne] model-${model}, condition-${condition} : ${err.message}`
    );
    return;
  }
};

const getFindAll = async (model, condition) => {
  let query = {};
  if (condition) query = { where: condition };
  try {
    let data;
    switch (model) {
      case "user":
        data = await User.findAll(query);
        break;
      case "member":
        data = await Member.findAll(query);
        break;
      case "company":
        data = await Company.findAll(query);
        break;
      case "attendance":
        data = await Attendance.findAll(query);
        break;
      case "memo":
        data = await Memo.findAll(query);
        break;
      case "payment":
        data = await Payment.findAll(query);
        break;
    }
    return data;
  } catch (err) {
    return;
  }
};

module.exports = { getFindOne, getFindAll };
