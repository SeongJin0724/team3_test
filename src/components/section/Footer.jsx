import React, { useState } from "react";

import { uldata1, uldata2, uldata3 } from "../data/footerdata";
import ModelContents from "../contents/ModelContents";
import { FcCloseUpMode } from "react-icons/fc";
import { FaCamera } from "react-icons/fa";

export default function Footer() {
  const [modal, setModal] = useState(false);
  const [modalContents, setModalContents] = useState("");
  const [modalContents2, setModalContents2] = useState("");
  const [modalContents3, setModalContents3] = useState("");

  const openModal = (contents) => {
    setModalContents(contents);
    setModalContents2(contents);
    setModalContents3(contents);
    setModal(true);
  };

  return (
    <>
      <footer className="footer">
        <br />
        <hr />
        <br />
        <div className="footer_container">
          <nav className="footer_nav">
            <div>
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
            </div>

            <div>
              <ul className="footer_info2">
                {uldata2.map((item, index) => (
                  <li key={index} onClick={() => openModal(item.src)}>
                    {item.title}
                  </li>
                ))}
              </ul>
              <ModelContents isOpen={modal} onClose={() => setModal(false)}>
                <div>{modalContents2}</div>
              </ModelContents>
            </div>
          </nav>
          <nav className="footer_nav2">
            <div className="footer_info3"></div>
            고객센터 1234-5678 <br />
            <br />
            운영시간 평일 10:00 - 18:00(토∙일, 공휴일휴무)
            <br />
            <br />
            점심시간 평일 13:00 - 14:00
            <br />
            <br /> 1:1 문의하기는 앱에서만 가능합니다.
          </nav>
        </div>
        <nav className="footer_nav3">
          <div>
            <ul className="footer_info4">
              {uldata3.map((item, index) => (
                <li key={index} onClick={() => openModal(item.src)}>
                  {item.title}
                </li>
              ))}
            </ul>
            <ul>
              <li>
                주식회사 · 대표 ㅇㅇㅇ 사업자등록번호 : 000-11-22222 통신판매업
                : 제 0123-C-4567호 사업장소재지 : 경기도 성남시 호스팅 서비스 :
                네이버 클라우드 ㈜
              </li>
              <li>
                신한은행 채무지급보증 안내 당사는 고객님의 현금 결제 금액에 대해
                신한은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고
                있습니다.
              </li>
              <li>
                ㅇㅇ은 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본
                상품은 개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한
                의무와 책임은 각 판매자에게 있습니다. 단, 이용약관 및 정책, 기타
                거래 체결 과정에서 고지하는 내용 등에 따라 검수하고 보증하는
                내용에 대한 책임은 ㅇㅇ에 있습니다.
              </li>
            </ul>
          </div>
          <p className="FcCloseUpMode">
            <FcCloseUpMode />
            <FaCamera />
          </p>
        </nav>
      </footer>
    </>
  );
}
