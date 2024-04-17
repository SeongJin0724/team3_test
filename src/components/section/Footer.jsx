import React, { useState } from "react";

import { uldata1, uldata2 } from "../data/footerdata";
import ModelContents from "../contents/ModelContents";

export default function Footer() {
  const [modal, setModal] = useState(false);
  const [modalContents, setModalContents] = useState("");
  const [modalContents2, setModalContents2] = useState("");

  const openModal = (contents) => {
    setModalContents(contents);
    setModalContents2(contents);
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
        </div>
        <br />
        <hr />
        <br />
      </footer>
    </>
  );
}
