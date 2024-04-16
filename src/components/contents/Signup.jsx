import React, { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    user_id: "",
    name: "",
    email: "",
    password: "",
    tel: "",
    dateJoined: new Date().toISOString().slice(0, 19).replace("T", " "),
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      console.log(data);
      alert(data.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signUp">
      <h2 className="signUp-header">회원가입</h2>

      <label for="name">이름</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
      />

      <label for="email">이메일</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />

      <label for="password">비밀번호</label>
      <input
        id="password"
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />

      <label for="tel">전화번호</label>
      <input
        id="tel"
        type="text"
        name="tel"
        placeholder="Telephone"
        onChange={handleChange}
        required
      />

      <label for="address">주소</label>
      <input
        id="address"
        type="text"
        name="address"
        placeholder="Address"
        onChange={handleChange}
      />

      <button type="submit">가입하기</button>
    </form>
  );
}
