import React, { useState } from 'react';
import CV from '../../assets/Resume.pdf';

import { Anchor, Drawer, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const { Link } = Anchor;

function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="#">SLDA</a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="20">
            <Link href="#profile" title="Perfil" />
            <Link href="#experience" title="Experiencia" />
            <Link href="#projects" title="Proyectos" />
            <Link href="#contact" title="Contacto"/>
          </Anchor>
          
          
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-stream"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="20">
                <Link href="#profile" title="Perfil" />
                <Link href="#experience" title="Experiencia" />
                <Link href="#projects" title="Proyectos" />
                <Link href="#contact" title="Contacto" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;