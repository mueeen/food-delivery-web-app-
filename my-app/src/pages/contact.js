import React, { useState } from 'react';

const FoodDeliveryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    foodItem: '',
    quantity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed successfully!\n\nDetails:\nName: ${formData.name}\nPhone: ${formData.phone}\nAddress: ${formData.address}\nFood Item: ${formData.foodItem}\nQuantity: ${formData.quantity}`);
  };

  return (
    <div className="maincontact">
    <div className="form-container colorful-form">
    <h2>Place Your Food Order</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Delivery Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Food Item:</label>
        <input
          type="text"
          name="foodItem"
          value={formData.foodItem}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Place Order</button>
    </form>
  </div>
  </div>
  );
};


export default FoodDeliveryForm;
