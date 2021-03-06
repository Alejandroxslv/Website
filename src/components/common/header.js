import React, { useState } from 'react';

import { Anchor, Drawer, Button, Image } from 'antd';
import { DownloadOutlined, AlipayOutlined } from '@ant-design/icons';

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
          <i className="fas fa-bolt" size="small"></i>
          <a href="#">SLDA</a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="20">
            <Link href="#profile" title="Perfil" />
            <Link href="#experience" title="Experiencia" />
            <Link href="#projects" title="Proyectos" />
            <Link href="#contact" title="Contacto"/>
            <Button type="dashed" href="/EN" size="small" shape="round" icon={<AlipayOutlined />}>English</Button>
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
            <br/>
            <Button type="dashed" href="/EN" size="small" shape="round" icon={<AlipayOutlined />}>English</Button>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;