// import React from 'react';
// import style from './contactSection.module.css'; // removed extra space and imported correctly

// function ContactSection() {
//   return (
//     <div className={style.contactSection}>
//       <div className={style.container}>
//         <div className={style.leftSide}>
//           <h2>Let’s Talk About Your Project</h2>
//           <p>Fill out the form and our team will get back to you within 24 hours.</p>

//           <form className={style.contactForm}>
//             <input type="text" placeholder="Your Name" />
//             <input type="email" placeholder="Your Email" />
//             <input type="text" placeholder="Phone Number" />
//             <textarea placeholder="Your Message"></textarea>
//             <button type="submit">Send Message</button>
//           </form>
//         </div>

//         <div className={style.rightSide}>
//           <div className={style.infoCard}>
//             <h3>Contact Information</h3>
//             <p>Email: info@yourdomain.com</p>
//             <p>Phone: +1 234 567 890</p>
//             <p>Address: 123 Main Street, City, Country</p>
//             <div className={style.socialIcons}>
//               <a href="#"><img src="/images/fb.png" alt="Facebook" /></a>
//               <a href="#"><img src="/images/insta.png" alt="Instagram" /></a>
//               <a href="#"><img src="/images/twitter.png" alt="Twitter" /></a>
//               <a href="#"><img src="/images/linkedin.png" alt="LinkedIn" /></a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContactSection;
// import React from 'react';
// import style from './contactSection.module.css';
// import 'react-phone-input-2/lib/style.css';
// import PhoneInput from 'react-phone-input-2';
// import {
//   User,
//   Mail,
//   Phone,
//   MessageSquare,
//   PhoneCall,
//   MapPin,
//   Share2
// } from 'lucide-react';

// function ContactSection() {
//   return (
//     <div className={style.contactContainer}>
//       <h2 className={style.contactTitle}>Contact Us</h2>
//       <div className={style.contactContent}>
//         <form className={style.contactForm}>
//           <div className={style.inputGroup}>
//             <span className={style.iconWrapper}><User size={20} /></span>
//             <input type="text" placeholder="Name" />
//           </div>

//           <div className={style.inputGroup}>
//             <span className={style.iconWrapper}><Mail size={20} /></span>
//             <input type="email" placeholder="Email" />
//           </div>

//           <div className={style.inputGroup}>
//             <span className={style.iconWrapper}><Phone size={20} /></span>
//             <PhoneInput
//               country={'us'}
//               enableSearch
//               inputStyle={{
//                 border: 'none',
//                 background: 'transparent',
//                 fontSize: '1rem',
//                 width: '100%',
//                 color: '#2c2c4a'
//               }}
//               buttonStyle={{
//                 background: 'transparent',
//                 border: 'none'
//               }}
//             />
//           </div>

//           <div className={`${style.inputGroup} ${style.messageGroup}`}>
//             <span className={style.iconWrapper}><MessageSquare size={20} /></span>
//             <textarea placeholder="Message" />
//           </div>

//           <button type="submit" className={style.sendButton}>Send</button>
//         </form>

//         <div className={style.contactOptions}>
//           <div className={style.option}>
//             <span className={style.iconWrapper}><PhoneCall size={24} /></span>
//             <p>Phone</p>
//           </div>
//           <div className={style.option}>
//             <span className={style.iconWrapper}><Mail size={24} /></span>
//             <p>Email</p>
//           </div>
//           <div className={style.option}>
//             <span className={style.iconWrapper}><MapPin size={24} /></span>
//             <p>Address</p>
//           </div>
//           <div className={style.option}>
//             <span className={style.iconWrapper}><Share2 size={24} /></span>
//             <p>Social</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContactSection;
import React, { useState, useEffect } from 'react';
import style from './contactSection.module.css';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  PhoneCall,
  MapPin,
  Share2
} from 'lucide-react';
import { Link } from 'react-router-dom';

function ContactSection() {
  const [panel, setPanel] = useState(null); // "phone", "email", "address", "social"
  const [flipStates, setFlipStates] = useState([false, false, false, false]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipStates(prev => prev.map(state => !state));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const contactItems = [
    {
      text: 'Phone',
      icon: <PhoneCall size={24} />,
      action: () => setPanel('phone')
    },
    {
      text: 'Email',
      icon: <Mail size={24} />,
      action: () => setPanel('email')
    },
    {
      text: 'Address',
      icon: <MapPin size={24} />,
      action: () => setPanel('address')
    },
    {
      text: 'Social',
      icon: <Share2 size={24} />,
      action: () => setPanel('social')
    }
  ];

  return (
    <div className={style.contactContainer}>
      <h2 className={style.contactTitle}>Contact Us</h2>
      <div className={style.contactContent}>
        <form className={style.contactForm}>
          <div className={style.inputGroup}>
            <span className={style.iconWrapper}><User size={20} /></span>
            <input type="text" placeholder="Name" />
          </div>

          <div className={style.inputGroup}>
            <span className={style.iconWrapper}><Mail size={20} /></span>
            <input type="email" placeholder="Email" />
          </div>

          <div className={style.inputGroup}>
            <span className={style.iconWrapper}><Phone size={20} /></span>
            <PhoneInput
              country={'us'}
              enableSearch
              inputStyle={{
                border: 'none',
                background: 'transparent',
                fontSize: '1rem',
                width: '100%',
                color: '#2c2c4a'
              }}
              buttonStyle={{
                background: 'transparent',
                border: 'none'
              }}
            />
          </div>

          <div className={`${style.inputGroup} ${style.messageGroup}`}>
            <span className={style.iconWrapper}><MessageSquare size={20} /></span>
            <textarea placeholder="Message" />
          </div>

          <button type="submit" className={style.sendButton}>Send</button>
        </form>

        <div className={style.contactOptions}>
          {contactItems.map((item, index) => (
            <div
              key={index}
              className={style.option}
              onClick={item.action}
            >
              <div className={`${style.optionInner} ${flipStates[index] ? style.flipped : ''}`}>
                <div className={style.optionInnerFront}>
                  <span className={style.iconWrapper}>{item.icon}</span>
                  <p>{item.text}</p>
                </div>
                <div className={style.optionInnerBack}>
                  <p>Click me</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Panel Layer */}
        <div className={`${style.panel} ${panel ? style.open : ''}`}>
          <button className={style.panelClose} onClick={() => setPanel(null)}>✕</button>

          {panel === 'phone' && (
            <>
              <h3>Call Us</h3>
              <p>+1 (123) 456-7890</p>
              <p>Mon-Fri, 9am–5pm</p>
            </>
          )}

          {panel === 'email' && (
            <>
              <h3>Email Us</h3>
              <p>support@example.com</p>
              <p>We'll reply within 24 hours</p>
            </>
          )}

          {panel === 'address' && (
            <>
              <h3>Our Address</h3>
              <p>123 Example Street<br />City, Country</p>
              <div className={style.mapContainer}>
                <iframe
                  src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Map"
                ></iframe>
              </div>
            </>
          )}

          {panel === 'social' && (
            <>
              <h3>Connect with Us</h3>
              <ul className={style.social_list}>
                <li><Link to="#"><img src="https://cdn-icons-png.flaticon.com/128/15047/15047435.png" alt="Facebook" /></Link></li>
                <li><Link to="#"><img src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" alt="Twitter" /></Link></li>
                <li><Link to="#"><img src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="Instagram" /></Link></li>
                <li><Link to="#"><img src="https://cdn-icons-png.flaticon.com/128/4494/4494497.png" alt="LinkedIn" /></Link></li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
