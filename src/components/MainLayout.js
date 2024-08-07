import React from "react";
import Category from "./Category";
import RealTime from "./RealTime";
import MainLayoutStyle from "../styles/mainLayout.module.css";

export default function MainLayout() {
  return (
    <div className="container">
      <div className={MainLayoutStyle.container}>
        <Category />
        <RealTime />
      </div>
    </div>
  );
}
