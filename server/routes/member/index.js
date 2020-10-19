const express = require("express");
const router = express.Router();
const { Member, Company } = require("../../models");

//회원 정보 가져오기
router.get("/:id", async (req, res) => {
  const member_no = req.params.id || "";
  const member = await Member.fineOne({ where: { member_no } });
  if (member) res.send({ code: 200, data: [member], message: "success" });
});

//모든 회원 리스트 가져오기
router.get("/", async (req, res) => {
  const members = await Member.findAll();
  if (members.length > 0) res.send({ code: 200, data: members });
});

//회원 등록 하기
router.post("/", async (req, res) => {
  const name = req.body.name || "";
  const phone = req.body.phone || "";
  const birth = req.body.birth || "";
  const company_code = req.body.company_code || "";

  try {
    const c_result = await Company.findOne({ company_code });
    console.debug(`[member]company_code search result - ${c_result}`);
    if (result) {
      const m_result = await Member.create({
        name,
        phone,
        birth,
        company_code
      });
      console.debug(`[member] create member ${name} result - ${m_result}`);
      if (m_result) res.send({ code: 200, message: "success" });
    }
  } catch (err) {
    console.error(`[member] Error - ${err.message}`);
    res.send({ code: 500, message: err.message });
  }
});

//member 삭제
router.post("/delete/:id", async (req, res) => {
  const member_no = req.params.id || "";
  try {
    if (member_no) {
      const result = await Member.destroy({ where: { member_no } });
      if (result > 0) res.send({ code: 200, data: result, message: "success" });
    }
  } catch (err) {
    console.error(`[member] Error - ${err.message}`);
  }
});

module.exports = router;
