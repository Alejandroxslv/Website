import React from 'react';
import Lottie from 'react-lottie';

import avatar from '../../assets/images/avatar-01.png';
import * as construction from '../../assets/images/construction.json';

import { Row, Col, Image, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';


const defaultOptions1 = {
  loop: true,
  autoplay: true, 
  animationData: construction.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

function AppProfile() {
  return (
    <div id="profile" className="block featureBlock bgGray">
        <div className="container-fluid">
        <div className="titleHolder">
            <h2>David Alejandro Silva López</h2>
            <p>Electrical Electronic Engineer</p>
        </div>
        
    <Row>
      {/* <Col md={{ span: 11 }}><Image width="50" src={avatar} preview={false}/></Col> */}
      <Col xs={{ span: 11 }} md={{ span: 11 }}><center><Lottie responsive options={defaultOptions1} height={300} width={450}/></center></Col>
      <Col md={{ span: 11, offset: 1 }}>
        <p className="profile-text">
          Hello, I am an electronic electrical engineer recently graduated from the <a href="https://www.ingenieria.unam.mx/" target="_blank">Facultad de Ingeniería, UNAM</a> and specialized in the area of control and automation. I enjoy designing and programming the logic behind the operation of automated systems, such as Programmable Logic Controllers from the brands <b> Allen Bradley </b> and <b> Siemens </b>, as well as Distributed Control Systems and SCADA supervision. Also, I have fun scripting <b> python </b> using my knowledge of <b> Artificial Intelligence </b>. <br/>
           I am a professional member in <a href="https://www.isa.org/" target="_blank">ISA</a> and recently I got a diploma due to my knowledge in <b> Basic Instrumentation of Industrial Processes </b>. <br/>
           I have taught at the Faculty of Engineering on different programming languages.
        </p>
        <div className="btnHolder">
 
            <Button  icon={<DownloadOutlined />} size="50" href='https://drive.google.com/file/d/1pCduwHL1dBt2g3aBMe4BUJzchK-sDrf9/view?usp=sharing' target='_blank'>
              Resume
            </Button>
        </div>
      </Col>
    </Row>
            
            
        </div>
      
    </div>
  );
}

export default AppProfile;