import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import AppHeader from './components/common/header_en';
import AppFooter from './components/common/footer';
import AppHome from './views/home_en';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function App_EN() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader/>
      </Header>
      <Content>
        <AppHome/> 
      </Content>
      <Footer>
          <AppFooter/>
      </Footer>      
    </Layout>
  );
}

export default App_EN;
