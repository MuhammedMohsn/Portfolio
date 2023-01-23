import React, { Fragment,useRef } from "react";
import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ydjbcfn', 'template_rl0ykmq', form.current, 'vI4JdS8AkYkpsxEt6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <Fragment>
      <section id="contact">
        <h4>Get in touch</h4>
        <h2>Contact me</h2>
        <div className="container contact_container">
          <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_option_icon"/>
            <h3>Email</h3>
            <h4>muhammedmohsen1111@gmail.com</h4>
            <a href="mailto:muhammedmohsen1111@gmail.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <BsMessenger  className="contact_option_icon"/>
            <h3>Messanger</h3>
            <a href="https://m.me/muhammed.mohsen.750/" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option_icon"/>
            <h3>Whatsapp</h3>
            <h4>+201125752389</h4>
            <a
              href="https://web.whatsapp.com/send?phone+201125752389"
              target="_blank" rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button className="btn  btn_primary" type="submit">
            Send Message
          </button>
        </form>
        </div>
   
      </section>
    </Fragment>
  );
}

export default Contact;
