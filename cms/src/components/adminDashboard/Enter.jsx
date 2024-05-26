import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Enter = () => {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState({
    rollNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  let submit = async (e) => {
    e.preventDefault();
    console.log("valid roll");

    try {
      const res = await axios.post("http://localhost:8000/enter", {
        "data": formData
      });
      console.log(res.data);
      if (res.data.valid === '0') {
        alert("invalid");
      } else {
        alert("valid");
        localStorage.setItem("token_key5", res.data.token);
        navigate('/ca');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={submit}>
        <div className="bgLogin d-flex justify-content-center align-items-center">
          <div className="formCont d-flex flex-column text-center pe-3">
            <h2 className="my-3">Enter your Roll-Number</h2>
            <input
              type="text"
              name="rollNumber"
              placeholder="Enter Roll Number"
              value={formData.rollNumber}
              onChange={handleChange}
              id="rollno"
            />
            <button className="button-85 mx-auto mt-5" role="button">Submit</button>
          </div>
        </div>
      </form>
    </>
  );
}

export { Enter };
