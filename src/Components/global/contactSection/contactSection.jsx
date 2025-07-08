import React, { useState, useEffect, useRef } from "react";
import style from "./contactSection.module.css";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  PhoneCall,
  MapPin,
  Share2,
} from "lucide-react";
import { Link } from "react-router-dom";

const formInitialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function ContactSection() {
  const [panel, setPanel] = useState(null);
  const [flipStates, setFlipStates] = useState([false, false, false, false]);
  const [formData, setFormData] = useState(formInitialValues);
  const [formErrors, setFormErrors] = useState({});
  const formRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipStates((prev) => prev.map((state) => !state));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const contactItems = [
    { text: "Phone", icon: <PhoneCall size={24} />, action: () => setPanel("phone") },
    { text: "Email", icon: <Mail size={24} />, action: () => setPanel("email") },
    { text: "Address", icon: <MapPin size={24} />, action: () => setPanel("address") },
    { text: "Social", icon: <Share2 size={24} />, action: () => setPanel("social") },
  ];

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) errors.email = "Invalid email format";
    if (!formData.phone.trim()) errors.phone = "Phone is required";
    if (!formData.message.trim()) errors.message = "Message is required";

    return errors;
  };
const [loading, setLoading] = useState(false);
const submitHandler = (e) => {
  e.preventDefault();
  const errors = validateForm();

  if (Object.keys(errors).length > 0) {
    setFormErrors(errors);
    return;
  }

  setLoading(true); // Start loader

  emailjs
    .send("service_w41dr46", "template_hinaz4d", formData, "DFKZTwXWoMmr84CRZ")
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);

        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
          confirmButtonColor: "#3085d6",
        });

        setFormErrors({});
        setFormData(formInitialValues);
        setLoading(false); // Stop loader
      },
      (error) => {
        console.log("FAILED...", error);

        Swal.fire({
          title: "Oops!",
          text: "Failed to send message. Please try again later.",
          icon: "error",
          confirmButtonColor: "#d33",
        });

        setLoading(false); // Stop loader
      }
    );
};


  return (
    <div className={style.contactContainer}>
      <h2 className={style.contactTitle}>Contact Us</h2>
      <div className={style.contactContent}>
        <form className={style.contactForm} onSubmit={submitHandler} ref={formRef}>
          <div className="position-relative">
            <div className={style.inputGroup}>
              <span className={style.iconWrapper}><User size={20} /></span>
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            {formErrors.name && <p className={style.error}>{formErrors.name}</p>}
          </div>

          <div className="position-relative">
            <div className={style.inputGroup}>
              <span className={style.iconWrapper}><Mail size={20} /></span>
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            {formErrors.email && <p className={style.error}>{formErrors.email}</p>}
          </div>

          <div className="position-relative">
            <div className={style.inputGroup}>
              <span className={style.iconWrapper}><Phone size={20} /></span>
              <PhoneInput
                country={"gb"}
                enableSearch
                inputProps={{ name: "phone", required: true }}
                value={formData.phone}
                onChange={(phone) => setFormData({ ...formData, phone })}
                inputStyle={{
                  border: "none",
                  background: "transparent",
                  fontSize: "1rem",
                  width: "100%",
                  color: "#2c2c4a",
                }}
                buttonStyle={{
                  background: "transparent",
                  border: "none",
                }}
              />
            </div>
            {formErrors.phone && <p className={style.error}>{formErrors.phone}</p>}
          </div>

          <div className="position-relative">
            <div className={`${style.inputGroup} ${style.messageGroup}`}>
              <span className={style.iconWrapper}><MessageSquare size={20} /></span>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            {formErrors.message && <p className={style.error}>{formErrors.message}</p>}
          </div>

          {/* <button type="submit" className={style.sendButton}>Send</button> */}
          <button type="submit" className={style.sendButton} disabled={loading}>
  {loading ? (
    <span className={style.loader}></span> // You can style this spinner in CSS
  ) : (
    "Send"
  )}
</button>

        </form>

        {/* CONTACT OPTIONS + PANEL SAME AS BEFORE */}
        {/* ... [KEEP YOUR EXISTING contactOptions and panel JSX here] ... */}
        
        <div className={style.contactOptions}>
          {contactItems.map((item, index) => (
            <div key={index} className={style.option} onClick={item.action}>
              <div className={`${style.optionInner} ${flipStates[index] ? style.flipped : ""}`}>
                <div className={style.optionInnerFront}>
                  <span className={style.iconWrapper}>{item.icon}</span>
                  <p>{item.text}</p>
                </div>
                <div className={style.optionInnerBack}><p>Click me</p></div>
              </div>
            </div>
          ))}
        </div>

        <div className={`${style.panel} ${panel ? style.open : ""}`}>
          <button className={style.panelClose} onClick={() => setPanel(null)}>✕</button>
          {panel === "phone" && (
            <>
              <h3>Call Us</h3>
              <p>+1 (123) 456-7890</p>
              <p>Mon-Fri, 9am–5pm</p>
            </>
          )}
          {panel === "email" && (
            <>
              <h3>Email Us</h3>
              <p>info@connectecobuilders.com</p>
              <p>We'll reply within 24 hours</p>
            </>
          )}
          {panel === "address" && (
            <>
              <h3>Our Address</h3>
              <p>123 Example Street<br />City, Country</p>
              <div className={style.mapContainer}>
                <iframe
                  src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%" height="100%" style={{ border: 0 }} loading="lazy"
                  allowFullScreen="" title="Map"
                ></iframe>
              </div>
            </>
          )}
          {panel === "social" && (
            <>
              <h3>Connect with Us</h3>
              <ul className={style.social_list}>
                <li><Link to="https://www.facebook.com/share/196LiTLvvq/"><img src="https://cdn-icons-png.flaticon.com/128/15047/15047435.png" alt="Facebook" /></Link></li>
                <li><Link to="https://connectecobuilders.com/"><img src="https://cdn3.iconfinder.com/data/icons/social-media-circle-6/1024/circle-10-256.png" alt="Website" /></Link></li>
                <li><Link to="https://www.checkatrade.com/trades/ssjbcontractorsltd"><img src="https://www.checkatrade.com/favicon-180.png" alt="checkatrade" /></Link></li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
