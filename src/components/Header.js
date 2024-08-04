import { Link } from "react-router-dom";
import React from "react";
function Header() {
  return (
    <header>
      헤더입니다
      <nav>
        <Link to="/">홈페이지</Link>
        <Link to="/regist">판매 페이지</Link>
        <Link to="/chat">채팅 페이지</Link>
        <Link to="/profile">마이 페이지</Link>
      </nav>
    </header>
  );
}

export default Header;
