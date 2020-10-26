import React, { useState } from "react";
// import Button from "@material-ui/core/Button";
// import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "./Button";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const Main = () => {
  const [phone, setPhone] = useState("");

  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(1)
      }
    }
  }));

  //버튼 클릭하여 번호 입력
  const inputNumber = e => {
    const number = e.target.value;
    setPhone(phone + number);
  };

  //입력된 핸드폰 번호 초기화
  const resetInput = () => {
    setPhone("");
  };

  //핸드폰번호로 회원 찾기
  const onSubmit = () => {
    console.log(phone);
    axios.get('localhost:3002')
    setPhone("");
  };

  const onChange = e => {
    console.log(e.target.value);
    setPhone(e.target.value);
  };

  return (
    <>
      <input type="text" placeholder="press your phone number" value={phone} onChange={onChange} />
      <div className={useStyles}>
        <Button num="1" inputNumber={inputNumber} />
        <Button num="2" inputNumber={inputNumber} />
        <Button num="3" inputNumber={inputNumber} />
        <br />
        <Button num="4" inputNumber={inputNumber} />
        <Button num="5" inputNumber={inputNumber} />
        <Button num="6" inputNumber={inputNumber} />
        <br />
        <Button num="7" inputNumber={inputNumber} />
        <Button num="8" inputNumber={inputNumber} />
        <Button num="9" inputNumber={inputNumber} />
        <br />
        <Button num="초기화" inputNumber={resetInput} />
        <Button num="0" inputNumber={inputNumber} />
        <Button num="확인" inputNumber={onSubmit} />
      </div>
    </>
  );
};

export default Main;
