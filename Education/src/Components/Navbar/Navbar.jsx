import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import defaultUser from '../../assets/user.png';

export const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [image, setImage] = useState(localStorage.getItem('profileImage') || defaultUser);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (image !== defaultUser) {
      localStorage.setItem('profileImage', image);
    }
  }, [image]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setModalVisible(false);
    }
  };

  const removeImage = () => {
    setImage(defaultUser);
    localStorage.removeItem('profileImage');
    setModalVisible(false);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="program" smooth={true} offset={-280} duration={500}>Program</Link></li>
        <li><Link to="about" smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to="campus" smooth={true} offset={-230} duration={500}>Campus</Link></li>
        <li><Link to="testimonials" smooth={true} offset={-220} duration={500}>Testimonials</Link></li>
        <li><button className="btn"><Link to="contact" smooth={true} offset={-210} duration={500}>Contact Us</Link></button></li>
      </ul>
      <img src={image ? image : defaultUser} alt="User" className="user-img" onClick={() => setModalVisible(true)} />

      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h3>Change Profile Photo</h3>
            <label htmlFor="fileInput" className="upload-btn">Upload Photo</label>
            <input type="file" id="fileInput" style={{ display: "none" }} onChange={handleImageChange} />
            <button className="remove-btn" onClick={removeImage}>Remove Photo</button>
            <button className="cancel-btn" onClick={() => setModalVisible(false)}>Cancel</button>
          </div>
        </div>
      )}
    </nav>
  );
};
