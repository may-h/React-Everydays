const { TableRow } = require("@material-ui/core");
const express = require("express");
const router = express.Router();
const sequelize = require("../../util/sequelize");
const memberValidation = require("../middleware/memberValidation");

//출석체크 하기
/*
  핸드폰 번호 뒷 4자리를 입력 -> validation check(일치하는 회원이 있는지) -> 있으면 출석 체크 
*/
router.get("/:number", memberValidation, async (req, res, next) => {
  try {
    console.log("router post 안에 들어왔어요 ㅋㅋㅋ");
  } catch (err) {
    err.message = "바꿔버린 에러메세지 ";
    next(err);
  }
});

//출석체크 기록 가져오기
router.get("/:id", async (req, res) => {
  const member_no = req.params.id || "";
  try {
    const datas = await sequelize.getFindAll("attendance", {
      member_no: member_no
    });
    res.send({ code: 200, data: [datas], message: "success" });
  } catch (err) {
    throw err;
  }
});

module.exports = router;
