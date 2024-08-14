import React, { useState } from "react";
import shopStyle from "../styles/shop.module.css";
import userImg from "../image/userImg.png";
import editImg from "../image/edit.png";
import checkImg from "../image/checkbox.png";
import SearchBox from "../components/SearchBox";
import ProductsCard from "../components/ProductsCard";

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

  /////////////////필터///////////////////
  const [selectedFilter, setSelectedFilter] = useState("전체");

  //필터 클릭 핸들러
  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  //필터에 따른 컨테이너
  const renderContainer = () => {
    switch (selectedFilter) {
      case "판매중":
        return (
          <>
            <div>판매중인상품</div>
          </>
        );
      case "예약중":
        return (
          <>
            <div>예약중인상품</div>
          </>
        );
      case "판매완료":
        return (
          <>
            <div>판매완료상품</div>
          </>
        );
      case "거래후기":
        return (
          <>
            <div>거래후기 콘텐츠</div>
          </>
        );
      default:
        // 전체 필터에 맞는 상품을 렌더링
        return (
          <>
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            {/* 여기에 전체 상품 목록을 추가 */}
          </>
        );
    }
  };
  return (
    <div className="container">
      <div className={shopStyle.container}>
        <div className={shopStyle.leftBox}>
          <div className={shopStyle.myProductsListBox}>
            <div className={shopStyle.myProductsTitle}>내 상품</div>
            <div className={shopStyle.myProductsList}>
              {["판매중", "예약중", "판매완료", "거래후기"].map((filter) => (
                <div
                  key={filter}
                  className={shopStyle.myProductsListTitle}
                  onClick={() => handleFilterClick(filter)}
                >
                  {filter}
                </div>
              ))}
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
          <div className={shopStyle.myProductsBox}>
            <div className={shopStyle.myProductsText}>내 상품</div>
            <div className={shopStyle.productListBox}>
              {["전체", "판매중", "예약중", "판매완료", "거래후기"].map(
                (filter) => (
                  <div
                    key={filter}
                    className={shopStyle.productsListTitle}
                    onClick={() => handleFilterClick(filter)}
                  >
                    {filter}
                  </div>
                )
              )}
            </div>
            <div className={shopStyle.myProductsMainBox}>
              <div className={shopStyle.mainTopBox}>
                <div className={shopStyle.mainTopLeftBox}>
                  <div>
                    상품 <span className="impact">15</span>
                  </div>
                </div>
                <div className={shopStyle.mainTopRightBox}>
                  <div className={shopStyle.filterTextBox}>최신</div>
                  <span>|</span>
                  <div className={shopStyle.filterTextBox}>저가</div>
                  <span>|</span>
                  <div className={shopStyle.filterTextBox}>고가</div>
                </div>
              </div>
              <div className={shopStyle.mainProductsBox}>
                {renderContainer()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
