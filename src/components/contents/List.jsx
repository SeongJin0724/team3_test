
import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function List() {
  const [data, setData] = useState([]);

useEffect(() => {
  axios.get('/list')
  .then(response => {
    setData(response.data)
  })
  .catch(error => {
    console.error('API 호출 중 에러 발생:', error);
  });
},[])
  return (
 <ul>
  {data.map((item,index) => (
    <li key={item.user_id}>{`Name:${item.name} Img:${item.img} Description:${item.description} Price:${item.price}`}</li>
  ))}
 </ul>
  )
}
