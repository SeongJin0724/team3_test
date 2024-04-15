
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
    <li key={item.itemKey}>{`title:${item.title} Img:${item.img} Description:${item.description} brand:${item.brand}`}</li>
  ))}
 </ul>
  )
}
