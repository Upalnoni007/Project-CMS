import React, { useState } from "react";
import "../css/Upload.css";
import axios from "axios";

const Uploadmars = () => {
  const [formData, setFormData] = useState({
    name:"",
    paperCode: "",
    paperName: "",
    rollNumber: "", // Changed to match camelCase convention
    CA1: "",
    CA2: "",
    CA3: "",
    CA4: "",
   // default value for select
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/papers", formData);
      console.log(res.data);
      alert("Marks updated successfully");
    } catch (error) {
      console.error("Error updating marks:", error.response.data); // Enhanced error logging
      alert(
        `Error: ${error.response.data.message || "Failed to update marks"}`
      ); // Improved error alert
    }
  };

  return (
    <div className="formContainer1">
      <form className="paper" onSubmit={handleSubmit}>
        <h2 className="formTitle">Paper Information</h2>

        
        <label htmlFor="paperCode">Enter Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your Name"
          required
        />


        <label htmlFor="paperCode">Paper Code:</label>
        <input
          type="text"
          id="paperCode"
          name="paperCode"
          value={formData.paperCode}
          onChange={handleChange}
          placeholder="Enter Paper Code"
          required
        />

        <label htmlFor="paperName">Paper Name:</label>
        <input
          type="text"
          id="paperName"
          name="paperName"
          value={formData.paperName}
          onChange={handleChange}
          placeholder="Enter Paper Name"
          required
        />

        <label htmlFor="rollNumber">Roll Number:</label>
        <input
          type="text"
          id="rollNumber"
          name="rollNumber"
          value={formData.rollNumber}
          onChange={handleChange}
          placeholder="Enter Student Roll Number"
          required
        />

        <label htmlFor="number">Number of CA1:</label>
        <input
          type="number"
          id="CA1"
          name="CA1"
          value={formData.CA1}
          onChange={handleChange}
          placeholder="Enter The Number of CA1"
          // required
        />
        <label htmlFor="number">Number of CA2:</label>
        <input
          type="number"
          id="CA2"
          name="CA2"
          value={formData.CA2}
          onChange={handleChange}
          placeholder="Enter The Number of CA"
          // required
        />

        <label htmlFor="number">Number of CA3:</label>
        <input
          type="number"
          id="CA3"
          name="CA3"
          value={formData.CA3}
          onChange={handleChange}
          placeholder="Enter The Number of CA3"
          // required
        />

        <label htmlFor="number">Number of CA4:</label>
        <input
          type="number"
          id="CA4"
          name="CA4"
          value={formData.CA4}
          onChange={handleChange}
          placeholder="Enter The Number of CA4"
          // required
        />

        <button type="submit" className="submitButton">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Uploadmars;
