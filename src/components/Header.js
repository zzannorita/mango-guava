import { Link } from "react-router-dom";
import React from "react";
import HeaderStyle from "../styles/header.module.css";
import logo from "../image/logo.png";
import alarmOff from "../image/alarmOff.png";
import chat from "../image/chat.png";
import person from "../image/person.png";
import sell from "../image/sell.png";
import SearchBox from "../components/SearchBox";

function Header() {
  return (
    <header className="container">
      <div className={HeaderStyle.headerBox}>
        <div className={HeaderStyle.headerTop}>
          <div className={HeaderStyle.headerTopRightBox}>
            <div className={HeaderStyle.loginBox}>
              <Link className={HeaderStyle.link} to="/login">
                로그인/회원가입
              </Link>
            </div>
            <div className="commonStyle">
              <img
                className={HeaderStyle.alarmImg}
                alt="alarmOff"
                src={alarmOff}
              />
            </div>
          </div>
        </div>
        <div className={HeaderStyle.headerBottom}>
          <div className={HeaderStyle.logoBox}>
            <div className={HeaderStyle.logo}>
              <img alt="logo" src={logo} />
            </div>
            <div>망고와 구아바</div>
          </div>
          <SearchBox />
          <div className={HeaderStyle.rightBox}>
            <div className={HeaderStyle.box}>
              <img className="commonImgSize" alt="sell" src={sell} />
              <div className={HeaderStyle.overlay}>판매</div>
            </div>
            <div className={HeaderStyle.box}>
              <img className="commonImgSize" alt="chat" src={chat} />
              <div className={HeaderStyle.overlay}>채팅</div>
            </div>
            <div className={HeaderStyle.box}>
              <img className="commonImgSize" alt="perosn" src={person} />
              <div className={HeaderStyle.overlay}>마이</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
