import React, { useState } from 'react';

function UserForm({ onSubmit }) {
  const [formData, setFormData] = useState({name: '',email: '', age: '', gender: 'Male'});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // send data to parent
    setFormData({ name: '', email: '', age: '', gender: 'Male' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label><br />
        <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
      </div>
      <div>
        <label>Email:</label><br />
        <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
      </div>
      <div>
        <label>Age:</label><br />
        <input type="number" name="age" value={formData.age} onChange={handleChange} required/>
      </div>
      <div>
        <label>Gender:</label><br />
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div><br />
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default UserForm;
