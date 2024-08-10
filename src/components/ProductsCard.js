import React from "react";
import PropTypes from "prop-types";
import productStyle from "../styles/productsCard.module.css"; // 스타일 파일
import productImg from "../image/exImg.png"; // 스타일 파일

const ProductCard = ({ product }) => {
  return (
    <div className={productStyle.productCard}>
      {/* <img src={product.image} alt={product.name} className="productImage" />
      <h2 className="productName">{product.name}</h2>
      <p className="productPrice">${product.price.toFixed(2)}</p>
      <button className="productButton">View Details</button> */}
      <img
        src={productImg}
        alt="productImg"
        className={productStyle.productImage}
      ></img>
      <div className={productStyle.productTopBox}>
        <div className={productStyle.productName}>컨버스 하이 그린</div>
        <div className={productStyle.productPrice}>50,000원</div>
        <div className={productStyle.productBottomBox}>
          <div className={productStyle.productLocation}>은평구 갈현동</div>
          <div className={productStyle.registTime}>5분전</div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
