import React from 'react';

import avatar from '../../assets/images/avatar-01.png';

import { Row, Col, Image, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

function AppProfile() {
  return (
    <div id="profile" className="block featureBlock bgGray">
        <div className="container-fluid">
        <div className="titleHolder">
            <h2>David Alejandro Silva López</h2>
            <p>Ingeniero Eléctrico Electrónico</p>
        </div>
        
    <Row>
      <Col md={{ span: 11 }}><Image width="600" src={avatar} preview={false}/></Col>
      <Col md={{ span: 11, offset: 1 }}>
        <p className="profile-text">
          Hola, soy un ingeniero eléctrico electrónico recién egresado de la <a href="https://www.ingenieria.unam.mx/" target="_blank">Facultad de Ingeniería, UNAM</a> y especializado 
          en el área de control y automatización. Disfruto diseñar y programar la lógica que hay detrás del funcionamiento de sistemas autómatas, tales como Controladores Lógicos Programables de las marcas <b>Allen Bradley</b> y <b>Siemens</b>, así como de los Sistemas de Control Distribuido y Supervisión SCADA. Además, me divierto realizando scripts en <b>python</b> utilizando mis conocimientos en <b>Inteligencia Artificial</b>.<br/>
          Soy miembro profesional en <a href="https://www.isa.org/" target="_blank">ISA</a> y recientemente obtuve un diploma debido a mis conocimientos en la <b>Instrumentación Básica de Procesos Industriales</b>.<br/>
          He dado clases en la Facultad de Ingeniería sobre distintos lenguajes de programación.
        </p>
        <div className="btnHolder">
 
            <Button  icon={<DownloadOutlined />} size="50" href='https://drive.google.com/file/d/1lfqgWk6hGjSPchfBUloCtC3lFnJvJ7qm/view?usp=sharing' target='_blank'>
              Descargar CV
            </Button>

        </div>
        
        
      </Col>
    </Row>
            
            
        </div>
      
    </div>
  );
}

export default AppProfile;