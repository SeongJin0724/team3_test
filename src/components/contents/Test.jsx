import React from "react";

export default function Test() {
  return (
    <>
      <div className="container">
        <header>
          <div className="header-box1">
            <div className="header-box1-right">
              <a href="#">회원가입</a>
              <a href="#">로그인</a>
              <a href="#">고객센터</a>
            </div>
          </div>

          <div className="header-box2">
            <div className="header-box2-left">
              <img src="../hp_logo.png" alt="로고" className="logo" />
            </div>
            <div className="header-box2-center">
              <form>
                <label for="search">검색어를 입력해 주세요.</label>
                <input type="text" id="search" name="search" />
                <button type="submit">
                  <span className="material-symbols-outlined">search</span>
                </button>
              </form>
            </div>

            <div className="header-box2-right">
              <span className="material-symbols-outlined"> location_on </span>
              <span className="material-symbols-outlined"> favorite </span>
              <span className="material-symbols-outlined"> shopping_cart </span>
            </div>
          </div>
        </header>

        <nav>
          <div className="nav-left">
            <span className="material-symbols-outlined"> menu </span>
            <span className="category-text">카테고리</span>
          </div>

          <div className="nav-center">
            <a href="#">신상품</a>
            <a href="#">베스트</a>
            <a href="#">알뜰쇼핑</a>
            <a href="#">특가/혜택</a>
          </div>

          <div className="nav-right">
            <button className="btn">샛별, 택배 배송안내</button>
          </div>
        </nav>

        <div className="box1">
          <div className="box1-content">
            <img
              src="https://product-image.kurly.com/cdn-cgi/image/width=1900,height=370,quality=85/banner/main/pc/img/81e2acb0-799b-4707-867d-cb3b41451006.jpg"
              alt="이미지"
            />
          </div>
        </div>
        <div className="box2">
          <h2 className="box2-title">이 상품 어떠세요?</h2>
          <div className="card-container">
            <div className="card">
              <div className="card-image">
                <img
                  src="https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=360,height=468,quality=85/product/image/5c52f00c-92fc-4640-826a-e766a0c54e1e.jpg?v=3"
                  alt="상품1"
                />
                <div className="card-icon">
                  <span className="material-symbols-outlined">
                    {" "}
                    local_mall{" "}
                  </span>
                </div>
              </div>
              <div className="card-content">
                <h3>에스티로더 앰플</h3>
                <p>가격: 50,000원</p>
              </div>
            </div>

            <div className="card">
              <div className="card-image">
                <img
                  src="https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=360,height=468,quality=85/product/image/09c7d6be-234c-4321-b370-4e2d69aa76cf.jpg?v=3"
                  alt="상품2"
                />
                <div className="card-icon">
                  <span className="material-symbols-outlined">
                    {" "}
                    local_mall{" "}
                  </span>
                </div>
              </div>
              <div className="card-content">
                <h3>BORA SUN-CREAM</h3>
                <p>가격: 50,000원</p>
              </div>
            </div>

            <div className="card">
              <div className="card-image">
                <img
                  src="https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=360,height=468,quality=85/product/image/5dbccd0c-065b-420c-afd8-6b37818f4936.jpg?v=3"
                  alt="상품3"
                />
                <div className="card-icon">
                  <span className="material-symbols-outlined">
                    {" "}
                    local_mall{" "}
                  </span>
                </div>
              </div>
              <div className="card-content">
                <h3>CACTUS BODY WASH</h3>
                <p>가격: 8,000원</p>
              </div>
            </div>

            <div className="card">
              <div className="card-image">
                <img
                  src="https://product-image.kurly.com/cdn-cgi/image/fit=crop,width=360,height=468,quality=85/product/image/e29e5354-c320-41a4-a910-24ebeed8e9b4.jpg?v=3"
                  alt="상품4"
                />
                <div className="card-icon">
                  <span className="material-symbols-outlined">
                    {" "}
                    local_mall{" "}
                  </span>
                </div>
              </div>
              <div className="card-content">
                <h3>BIO-DERMA CREAM</h3>
                <p>가격: 50,000원</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
