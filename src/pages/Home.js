import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductsCard";
import HomeStyle from "../styles/home.module.css";
export default function Home() {
  // const [recommendedProducts, setRecommendedProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch("/api/recommended-products");
  //       const data = await response.json();
  //       setRecommendedProducts(data);
  //     } catch (error) {
  //       console.error("Error fetching recommended products:", error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  return (
    <div className="container">
      <div className={HomeStyle.recommendBox}>
        <div className={HomeStyle.userRecommendBox}>
          <div>사용자 추천 상품</div>
          <div className="productList">
            {/* {recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))} */}
            <ProductCard />
          </div>
        </div>
        <div className={HomeStyle.locationRecommendBox}>
          <div>위치별 추천 상품</div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
