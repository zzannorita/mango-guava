import { Link } from "react-router-dom";
import React, { useState } from "react";
import CategoryStyle from "../styles/category.module.css";
import categoryImg from "../image/category.png";

export default function Category() {
  ///////////////////카테고리 hover시////////////////////
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSubCategory, setHoveredSubCategory] = useState(null);

  //첫번째 카테고리 하버시
  const handleMouseHover = (category) => {
    setHoveredCategory(category);
  };

  //카테고리 중복 뜸 방지
  const handleMouseLeave = () => {
    setHoveredCategory(null);
    setHoveredSubCategory(null);
  };

  //두번째 카테고리 하버시
  const handleSubMouseHover = (subCategory) => {
    setHoveredSubCategory(subCategory);
  };

  return (
    <div className={CategoryStyle.categoryBox}>
      <img
        className={CategoryStyle.categoryImg}
        alt="categoryImg"
        src={categoryImg}
      />
      <div className={CategoryStyle.navbar}>
        <ul>
          <li
            onMouseEnter={() => handleMouseHover("clothing")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/clothing">의류</Link>
            {hoveredCategory === "clothing" && (
              <div className={CategoryStyle.subNavbar}>
                <ul>
                  <li
                    onMouseEnter={() => handleSubMouseHover("men")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link to="/clothing/men">남성의류</Link>
                    {hoveredSubCategory === "men" && (
                      <div className={CategoryStyle.subSubNavbar}>
                        <ul>
                          <li>
                            <Link to="/clothing/men/shirts">상의</Link>
                          </li>
                          <li>
                            <Link to="/clothing/men/pants">하의</Link>
                          </li>
                          <li>
                            <Link to="/clothing/men/shoes">운동화</Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                  <li>
                    <Link to="/clothing/women">여성의류</Link>
                  </li>
                  <li>
                    <Link to="/clothing/kids">아동의류</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link to="/link2">가전제품</Link>
          </li>
          <li>
            <Link to="/link3">주방용품</Link>
          </li>
          <li>
            <Link to="/link4">자동차용품</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
