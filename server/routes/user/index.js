const express = require("express");
const router = express.Router();
const sequelize = require("../../util/sequelize");
const { User, Company } = require("../../models");
const { NextWeek } = require("@material-ui/icons");

//유저 정보 가져오기
// localhost:3002/user/2
router.get("/:id", async (req, res, next) => {
  const user_no = req.params.id || "";
  try {
    const result = await sequelize.getFindOne("user", { user_no: user_no });
    if (result) {
      res.send({ code: 200, data: [result], message: "success" });
    } else {
      res.status(200).send({ code: 200, data: [result], message: "fail" });
    }
  } catch (err) {
    console.log("error");
    next(err);
  }
});

//유저 전체 정보 가져오기
router.get("/", async (req, res) => {
  // User.findAll()
  //   .then((results) => {
  //     res.send({ code: 200, data: results });
  //   })
  //   .catch((err) => res.send({ code: 500, message: err.message }));
  const result = await sequelize.getFindAll("user");
  res.send({ data: result });
});

//유저 등록하기
router.post("/", async (req, res) => {
  console.log(req.body);
  //개인정보
  const user_id = req.body.userId || "";
  const email = req.body.email || "";
  const password = req.body.password || "";

  //회사정보
  const company_name = req.body.companyName || "";
  const logo_file_path = ""; //로고 이미지 저장

  User.create({
    user_id,
    email,
    password,
  })
    .then(({ dataValues }) => {
      let user_no = dataValues.user_no;
      console.log("result -> ", dataValues.user_no);
      console.log(`Insert ${user_id}'s Data Into Users Table`);
      Company.create({
        user_no,
        company_name,
      }).then((result) => {
        console.log("성공!", result);
        res.send({ code: 200, message: "success" });
      });
    })
    .catch((err) => {
      console.log(err.message), res.send({ code: 500, message: err.message });
    });

  console.log("user_no -> ", user_no);
  //회사 정보
  Company.create({
    user_no,
    company_name,
  }).catch((err) => {
    console.log(err.message);
    res.send({ code: 500, message: err.message });
  });
});

//유저 삭제하기
router.post("/delete/:id", (req, res) => {
  const user_no = req.params.id || "";
  if (user_no) {
    User.destroy({ where: { user_no } })
      .then((result) => {
        console.log("${user_id} - ${result}개가 삭제되었습니다.");
        res.send({ code: 200, message: result }); //result는 삭제된 갯수
      })
      .catch((err) => res.send({ code: 500, message: err.message }));
  }
});

module.exports = router;
