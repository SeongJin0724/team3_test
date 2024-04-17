import React from "react";
import { Link } from "react-router-dom";
import { footer } from "../data/Footer";

export default function Foot() {
  return (
    <footer>
      <div className="footer_container">
        <nav className="footer_nav">
          <ul className="footer_info">
            {footer.map((info, key) => (
              <li key={key}>
                <Link to={info.src}>{info.title}</Link>
              </li>
            ))}
          </ul>
          <ul className="footer_info2">
            <li className="info_support">
              <Link className="support_l" target="_blank">
                고객지원
              </Link>
            </li>
            <li className="info_notice">
              <Link className="notice_l" target="_blank">
                공지사항
              </Link>
            </li>
            <li className="info_sintro">
              <Link className="sintro_l" target="_blank">
                서비스 소개
              </Link>
            </li>
            <li className="info_sguide">
              <Link className="sguide_l" target="_blank">
                스토어 안내
              </Link>
            </li>
            <li className="info_saccept">
              <Link className="saccept_l" target="_blank">
                판매자 방문접수
              </Link>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </div>
      <div>
        <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <p></p>
      </div>
      <div>
        <p></p>
      </div>
    </footer>
  );
}
