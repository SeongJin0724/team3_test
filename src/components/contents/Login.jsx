import React, { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
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
      <div className='div'></div>
    <h2 className="h2">로그인</h2>
    <input type="email" className="input1" name="email" placeholder="이메일" onChange={(e) => setEmail(e.target.value)} required />
    <input type="password" className="input2" name="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)} required />
    <button type="submit" className="button">로그인</button>
  </form>
  )
}
