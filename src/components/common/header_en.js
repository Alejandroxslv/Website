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
            <Link href="#profile" title="Profile" />
            <Link href="#experience" title="Experience" />
            <Link href="#projects" title="Projects" />
            <Link href="#contact" title="Contact"/>
            <Button type="dashed" href="/" size="small" shape="round" icon={<AlipayOutlined />}>Español</Button>
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
                <Link href="#profile" title="Profile" />
                <Link href="#experience" title="Experience" />
                <Link href="#projects" title="Projects" />
                <Link href="#contact" title="Contact" />
            </Anchor>
            <br/>
            <Button type="dashed" href="/" size="small" shape="round" icon={<AlipayOutlined />}>Español</Button>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;