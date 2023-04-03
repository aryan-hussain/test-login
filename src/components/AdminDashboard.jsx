import React, { useState } from 'react';
import axios from 'axios';
import '../style/Adminboard.css';

const AddProductForm = () => {
  const [name, setName] = useState('');
  const [desc, setdesc] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);
  const [catagory, setcatagory] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('desc', desc);
    formData.append('price', price);
    formData.append('image', image);
    formData.append('catagory', catagory);

    try {
      const response = await axios.post('', formData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-product-form">
      <label className="form-label">
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-input" />
      </label>
      <label className="form-label">
        Description:
        <textarea value={desc} onChange={e => setdesc(e.target.value)} className="form-input" />
      </label>
      <label className="form-label">
        Catagory:
        <input type="text" value={catagory} onChange={e => setcatagory(e.target.value)} className="form-input" />
      </label>
      <label className="form-label">
        Price:
        <input type="number" value={price} onChange={e => setPrice(e.target.value)} className="form-input" />
      </label>
      <label className="form-label">
        Image:
        <input type="file" onChange={e => setImage(e.target.files[0])} className="form-input" />
      </label>response
      <button type="submit" className="form-button">Add Product</button>
    </form>
  );
};

export default AddProductForm;