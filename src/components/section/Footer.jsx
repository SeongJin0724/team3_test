import React, { useState } from "react";

import { uldata1 } from "../data/footerdata";
import ModelContents from "../contents/ModelContents";
import { FcCloseUpMode } from "react-icons/fc";
import { FaCamera } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const [modal, setModal] = useState(false);
  const [modalContents, setModalContents] = useState("");

  const openModal = (contents) => {
    setModalContents(contents);
    setModal(true);
  };

  return (
    <>
      <footer className="footer">
        <hr />
        <div className="footer_container">
          <div className="footer_top">
            <nav className="footer_nav">
              <ul className="footer_info">
                {uldata1.map((item, index) => (
                  <li key={index} onClick={() => openModal(item.src)}>
                    {item.title}
                  </li>
                ))}
              </ul>
              <ModelContents isOpen={modal} onClose={() => setModal(false)}>
                <div>{modalContents}</div>
              </ModelContents>
            </nav>
            <nav className="footer_nav2">
              <ul className="footer_info2">
                <li>
                  <Link to={"/notice"}>공지사항</Link>
                </li>
                <li>
                  <Link to={"/service"}>서비스 소개</Link>
                </li>
                <li>
                  <Link to={"/storeinfo"}>스토어 안내</Link>
                </li>
                <li>
                  <Link to={"/acceptance"}>판매자 방문접수</Link>
                </li>
              </ul>
            </nav>
            <div className="footer_info3">
              <p className="p6">고객센터 1234-5678</p>{" "}
              <p className="p7">
                운영시간 평일 10:00 - 18:00(토∙일, 공휴일휴무)
              </p>{" "}
              <p className="p8">점심시간 평일 13:00 - 14:00</p> 1:1 문의하기는
              앱에서만 가능합니다.
              <p className="p9">
                <Link to={"/question"}>
                  <input
                    type="button"
                    id="question_button"
                    value="자주 하는 질문"
                  />
                </Link>
              </p>
            </div>
          </div>
          <div className="footer_bottom">
            <nav className="footer_nav3">
              <ul className="footer_info4">
                <li>
                  <Link to={"/company"}>회사소개</Link>
                </li>
                <li>
                  <Link to={"/talented"}>인재채용</Link>
                </li>
                <li>
                  <Link to={"/partnership"}>제휴제안</Link>
                </li>
                <li>
                  <Link to={"/terms"}>이용약관</Link>
                </li>
                <li>
                  <Link to={"/personal"}>개인정보처리방침</Link>
                </li>
              </ul>
            </nav>
            <div className="footer_info5">
              <p className="p1">
                주식회사 · 대표 ㅇㅇㅇ 사업자등록번호 : 000-11-22222 통신판매업
                : 제 0123-C-4567호
              </p>{" "}
              <p className="p2">
                사업장소재지 : 경기도 성남시 호스팅 서비스 : 네이버 클라우드 ㈜
              </p>
              <p className="p3">신한은행 채무지급보증 안내</p>{" "}
              <p className="p4">
                당사는 고객님의 현금 결제 금액에 대해 신한은행과 채무지급보증
                계약을 체결하여 안전거래를 보장하고 있습니다.
              </p>{" "}
              <p className="p5">
                ㅇㅇ은 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본
                상품은 개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한
                의무와 책임은 각 판매자에게 있습니다. 단, 이용약관 및 정책, 기타
                거래 체결 과정에서 고지하는 내용 등에 따라 검수하고 보증하는
                내용에 대한 책임은 ㅇㅇ에 있습니다.
              </p>
              <Link to={"/company"}>
                <FcCloseUpMode className="FcCloseUpMode" />
              </Link>
              <Link to={"/company"}>
                <FaCamera className="FaCamera" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
