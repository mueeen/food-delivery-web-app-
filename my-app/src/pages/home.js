import React from 'react';
import "./style.css"
import imag1 from "../images/home11.jfif"
import FoodDeliveryForm from '../pages/contact'
const Home = () => {
  return (
  
    
<div className='homeimg'>
<img src={imag1} alt="" />
<div className="piza">
 <div className="about">
  <h1>About Us</h1>
 </div>
 <section className="about-us-section">
      <div className="about-us-container">
     
        <p>
          Welcome to Quick Food Delivery! We are dedicated to providing fast and delicious meals 
          to your doorstep. Our team works around the clock to ensure fresh ingredients and speedy 
          deliveries, making sure you enjoy the best dining experience from the comfort of your home.
        </p>
        <div className="about-us-image">
        <img src={imag1} alt="" />
        </div>
      </div>
    </section>
  );

   

  
   </div>
   {/* services */}
   <div className="gold" id='services'></div>
   <div className="services">
    <h1>Services</h1>
   </div>
   <div className="piza">
    <div className="pizaacontainer">
   <div className="div2">
    <img src={imag1} alt="" />
    <div className="pizacontant">
     <h4>pizaa</h4>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
     <button>order </button>
     </div>
   </div> 
   <div className="div2">
    <img src={imag1} alt="" />
     <h4>pizaa</h4>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
     <button>order </button>
   </div> <div className="div2">
    <img src={imag1} alt="" />
     <h4>pizaa</h4>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
     <button>order </button>
   </div> <div className="div2">
    <img src={imag1} alt="" />
     <h4>pizaa</h4>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
     <button>order </button>
   </div> <div className="div2 card4">
    <img src={imag1} alt="" />
     <h4>pizaa</h4>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
     <button>order </button>
   </div> <div className="div2 card4">
    <img src={imag1} alt="" />
     <h4>pizaa</h4>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
     <button>order </button>
   </div> <div className="div2 card4">
    <img src={imag1} alt="" />
     <h4>pizaa</h4>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
     <button>order </button>
   </div> <div className="div2 card4">
    <img src={imag1} alt="" />
     <h4>pizaa</h4>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
     <button>order </button>
   </div>
   

   </div>
   </div>
   <div className="gold"></div>
   <div className="form">
    <h1>Form</h1>
   </div>
   <>
   <FoodDeliveryForm />
   </>
   <footer className="footer">
      <div className="footer-container">
        {/* Section for Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Phone:+923109438522</p>
          <p>Email: alimueen0512@gmail.com</p>
          <p>Email: khanam0512@gmail.com</p>
          <p>Address: Gilgit City</p>
        </div>

        {/* Section for Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Section for Social Media Links */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="footer-bottom">
        <p>&copy; 2024 Food Delivery. All rights reserved.</p>
      </div>
    </footer>
 
   
    </div>
    
    
  )
}    

export default Home;
