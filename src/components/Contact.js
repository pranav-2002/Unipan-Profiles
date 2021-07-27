import React from "react";
import "./Contact_Style.css";
import EmailIcon from "@material-ui/icons/Email";
import BusinessIcon from "@material-ui/icons/Business";
import PhoneIcon from "@material-ui/icons/Phone";

function Contact() {
  return (
    <div className="contact">
      <title>
        Contact-Unipan Profiles PVC Doors and Cupboards Manufacturer
      </title>
      <div className="contact-content first-icon">
        <div className="contact-icons">
          <PhoneIcon className="phone-icon" />
        </div>
        <div className="contact-text">
          <p>+91-9849037043</p>
          <p>+040-66745673</p>
          <p>+91-7416512003</p>
        </div>
      </div>
      <div className="contact-content">
        <div className="contact-icons">
          <EmailIcon className="phone-icon" />
        </div>
        <div className="contact-text">
          <p>unipanprofiles@gmail.com</p>
        </div>
      </div>
      <div className="contact-content">
        <div className="contact-icons">
          <BusinessIcon className="phone-icon" />
        </div>
        <div className="contact-text">
          <p>1-7-150/1/A, </p>
          <p>Beside Captain Cook Lane,</p>
          <p> Bakaram, Hyderabad-20 </p>
        </div>
      </div>
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.1688193224004!2d78.49767976575653!3d17.41199792737628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99dc3301f453%3A0xf1b573b46490a3a8!2sUNIPAN(I)%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1626270991657!5m2!1sen!2sin"
          width="400"
          height="300"
          style={{ border: "0" }}
          allowFullScreen
          title="Unipan-Address"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
