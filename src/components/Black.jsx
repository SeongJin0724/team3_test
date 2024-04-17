import React, { useState } from "react";

export default function Black(isClose) {
  const [modal, setModal] = useState(false);
  const modalHandler2 = () => {
    setModal(false);
  };
  return <div isClose={modalHandler2}>Black</div>;
}
