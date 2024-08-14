import React, { useState } from "react";
import shopStyle from "../styles/shop.module.css";
import userImg from "../image/userImg.png";
import editImg from "../image/edit.png";
import checkImg from "../image/checkbox.png";
export default function Shop() {
  /////////////////////소개글 수정//////////////////////
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState("");
  const [tempDescription, setTempDescription] = useState("");

  const handleEditClick = () => {
    if (isEditing) {
      // 수정 후 저장하면 description에 tempDescription 저장
      setDescription(tempDescription);
    } else {
      // 수정 모드로 들어갈 때 현재 description을 tempDescription에 저장
      setTempDescription(description);
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (event) => {
    setTempDescription(event.target.value);
  };

  return (
    <div className="container">
      <div className="commonStyle">
        <div className={shopStyle.leftBox}>
          <div className={shopStyle.myProductsListBox}>
            <div className={shopStyle.myProductsTitle}>내 상품</div>
            <div className={shopStyle.myProductsList}>
              <div>판매중</div>
              <div>예약중</div>
              <div>판매 내역</div>
              <div>거래 내역</div>
            </div>
          </div>
          <div className={shopStyle.myInfoListBox}>
            <div className={shopStyle.myProductsTitle}>내 정보</div>
            <div className={shopStyle.myProductsList}>
              <div>구매내역</div>
              <div>찜한상품</div>
              <div>즐겨찾기</div>
              <div>설정</div>
            </div>
          </div>
        </div>
        <div className={shopStyle.rightBox}>
          <div className={shopStyle.myShopBox}>
            <div className={shopStyle.myShopTitleBox}>
              <div className={shopStyle.myShopTitleText}>000님의 상점</div>
              <div className={shopStyle.myShopStarBox}>
                <div className={shopStyle.myShopStars}>
                  <div className={shopStyle.rating}>
                    <span className={shopStyle.star} data-value="5">
                      &#9733;
                    </span>
                    <span className={shopStyle.star} data-value="4">
                      &#9733;
                    </span>
                    <span className={shopStyle.star} data-value="3">
                      &#9733;
                    </span>
                    <span className={shopStyle.star} data-value="2">
                      &#9733;
                    </span>
                    <span className={shopStyle.star} data-value="1">
                      &#9733;
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={shopStyle.myShopInfoBox}>
              <img
                className={shopStyle.myShopImg}
                src={userImg}
                alt="userImg"
              ></img>
              <div className={shopStyle.myShopInfoText}>
                <textarea
                  className={`${shopStyle.textArea} ${
                    isEditing ? shopStyle.textAreaEditing : ""
                  }`}
                  value={isEditing ? tempDescription : description}
                  onChange={handleChange}
                  disabled={!isEditing}
                  placeholder="상점을 소개하는 글을 작성하여 신뢰도를 높여 보세요."
                ></textarea>
              </div>
              {isEditing ? (
                <img
                  className={shopStyle.editImg}
                  src={checkImg}
                  alt="checkImg"
                  onClick={handleEditClick}
                ></img>
              ) : (
                <img
                  className={shopStyle.editImg}
                  src={editImg}
                  alt="editImg"
                  onClick={handleEditClick}
                ></img>
              )}
            </div>
          </div>
          <div className={shopStyle.myProductsBox}></div>
        </div>
      </div>
    </div>
  );
}
