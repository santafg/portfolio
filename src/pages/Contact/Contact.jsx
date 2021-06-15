import React, { useState } from "react";
import contactPic from "../../images/contact.png";
import emailjs from "emailjs-com";
import "./Contact.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Contact = () => {
  const [data, setdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const inputEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setdata({ ...data, [name]: value });
  };

  const sendMail = async () => {
    try {
      const { name, email, message } = data;
    if (!name || !email || !message) {
      toast.warning("Please fill all the fields");
    }else{
     const res = await emailjs.send("gmail", "template_v29qojl", {
       email: email,
       name: name,
       message: message,
     },"user_qq1iYLeLniQugk6L29ip7")
     if (res.status === 200) {
       toast.success('Mail has been sent sucessfully');
     }else{
      toast.error('Mail sent Unsucessful');
     }
    }
    } catch (error) {
      console.log(error);
      toast.error('Mail sent Unsucessful');
    }
  };

  return (
    <>
      <div className="contactContainer" id="contact">
        <ToastContainer 
        className = 'mytoast'
        position="top-center"
        autoClose={2500}/>
        <div className="contactBox">
          <div className="contactDiv">
            <div className="formDiv">
              <div className="heading">
                <h1>Contact</h1>
              </div>
              <div className="forms">
                <label htmlFor="name">
                  <h2>Name : </h2>
                  <input
                    name="name"
                    value={data.name}
                    onChange={inputEvent}
                    type="text"
                  />
                </label>
                <label htmlFor="email">
                  <h2>Email : </h2>
                  <input
                    name="email"
                    value={data.email}
                    onChange={inputEvent}
                    type="text"
                  />
                </label>
                <div className="messageArea">
                  <div className="head">
                    <h2>Message : </h2>
                  </div>
                  <div className="body">
                    <textarea
                      name="message"
                      onChange={inputEvent}
                      value={data.message}
                      id="message"
                      cols="30"
                      rows="5"
                      placeholder="Enter message here..."
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="btn">
                <button onClick={sendMail}>Send</button>
                <div className="links">
                  <a
                    href="https://github.com/santafg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGithub />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/santanu-ghosh-27abb2213/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.instagram.com/worshiper_of_light_yagami/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GrInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="imageDiv">
            <img src={contactPic} alt="Contact pic" className="contactPic" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
