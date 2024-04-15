import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";
import axios from 'axios';

export default function Pages1() {
  const [data, setData] = useState([]);

useEffect(() => {
  axios.get('/product')
  .then(response => {
    setData(response.data)
  })
  .catch(error => {
    console.error('API 호출 중 에러 발생:', error);
  });
},[])
  return <Main>
 <ul>
  {data.map((item,index) => (
    <li key={item.formKey}>{`title:${item.title} Img:${item.img} Description:${item.description} Price:${item.price}`}</li>
  ))}
 </ul>
 </Main>;
}
