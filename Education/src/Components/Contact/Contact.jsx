import React from 'react'
import './Contact.css'
import msg from '../../assets/msg-icon.png'
import mail from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import location from '../../assets/location-icon.png'
import write from '../../assets/white-arrow.png'

export const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg} alt="" /></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquam nisi veniam velit debitis corporis, dolorem blanditiis, maiores qui eveniet quae maxime dignissimos, atque laudantium! Quia sapiente atque ad voluptatem.</p>
                <ul>
                    <li><img src={mail} alt="" />Yashkhatri378@gmail.com</li>
                    <li><img src={phone} alt="" />+91 8595753180</li>
                    <li><img src={location} alt="" />gtffteftyeufeyfueifh</li>
                </ul>
            </div>
            <div className="contact-col">
                <form action="">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" required name='name' placeholder='Entar Your Name' />
                    <label htmlFor="number">Phone Number</label>
                    <input type="text" required name='number' placeholder='Entar Your Number' />
                    <label htmlFor="message">Write your message here</label>
                    <textarea name="message" id="" rows="6"  placeholder='Entar your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit <img src={write} alt="" /></button>
                </form>
            </div>
        </div>
    )
};
