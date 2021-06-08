import React from 'react';

import { BackTop } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <ul className="socials">
          <li><a href="https://www.linkedin.com/in/david-alejandro-silva-lópez-45bba9163/" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://github.com/Alejandroxslv" target="_blank"><i className="fab fa-github"></i></a></li>
          <li><a href="https://www.t.me/Alejandroxslv" target="_blank"><i className="fab fa-telegram-plane"></i></a></li>
          <li><a href="https://www.twitter.com/Alejandroxslv" target="_blank"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://www.instagram.com/Alejandroxslv" target="_blank"><i className="fab fa-instagram"></i></a></li>
          <li><a href="https://open.spotify.com/user/k5r2qe2aqabxcwtpe2wk5p9su?si=67c598dc5b0c4994" target="_blank"><i className="fab fa-spotify"></i></a></li>
        </ul>
        {/* <BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop> */}
      </div>
      <div className="footer">
        <p><AntDesignOutlined /> Powered by <b>Alejandroxslv</b> &copy; 2021</p>
      </div>
    </div>
  );
}

export default AppFooter;