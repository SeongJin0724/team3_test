import React, { useState } from 'react';

export default function SubmitItemSale() {
  const [formData, setFormData] = useState({
    formKey: '',
    user_id: '',
    title: '',
    img: '',
    description: '',
    price: '',
    addDate: new Date()
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/ee', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);
      alert(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>판매신청</h2>
      <input type="number" name="formKey" placeholder="formKey" onChange={handleChange} required />
      <input type="number" name="user_id" placeholder="user_id" onChange={handleChange} required />
      <input type="text" name="title" placeholder="title" onChange={handleChange} required />
      <input type="text" name="img" placeholder="img" onChange={handleChange} required />
      <input type="text" name="description" placeholder="description" onChange={handleChange} required />
      <input type="number" name="price" placeholder="price" onChange={handleChange} />
      <button type="submit">가입하기</button>
    </form>
  );
}