import React, { useState, useRef } from "react";
import "./Contact.css";
import axios from "../axios";

function Contact() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [emailSent, setEmailSent] = useState(false);

  const sendData = async (e) => {
    e.preventDefault();
    if (emailRef.current.value && nameRef.current.value){
      await axios.post("contact", {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      });
      nameRef.current.value = null;
      emailRef.current.value = null;
      messageRef.current.value = null;
      setEmailSent(true);
      console.log("email sent");
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact__data">
        <h2>Contact</h2>
        <hr />
        <h5>{emailSent ? "Thanks for contacting" : "get in touch"}</h5>
        <input ref={nameRef} type="text" placeholder="Name" />
        <input ref={emailRef} type="email" placeholder="Email" />
        <textarea
          ref={messageRef}
          name=""
          id=""
          placeholder="Message"
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit" onClick={sendData}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Contact;
