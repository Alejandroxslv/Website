import React from 'react';

import qr_code from '../../assets/images/qr_namecard.png';
import { Form, Input, Button, Checkbox, Image, Tag} from 'antd';
const { TextArea } = Input;


function AppContact() {
  return (
    <div id="contact" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Contact</h2>
        </div>
        <div className="quickSupport">
          <h3></h3>
          <p>My inbox is always open. Whether you have a question or just want to say hi, I'll do my best to get back to you soon! Contact me via email <a href="mailto:alejandroxslv@gmail.com?Subject=Contacto%20desde%20website" target='_blank'>alejandroxslv@gmail.com</a></p>
          <Button type="primary" size="large" href="mailto:alejandroxslv@gmail.com?Subject=Contacto%20desde%20website" target='_blank'><i className="fas fa-envelope"></i> send message</Button>
        </div>
        <p className="qr_code">
        <img width={230} alt="qr_code" src={qr_code}/>
        </p>
        
      </div>
    </div>  
  );
}

export default AppContact;


