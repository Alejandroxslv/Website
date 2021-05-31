import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Result, Button } from 'antd';

import AppHeader from './components/common/header_en';
import AppFooter from './components/common/footer';
import AppHome from './views/home_en';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function App_EN() {
  return (
    <Result
    status="404"
    title="Error 404"
    subTitle="Lo siento, la página que has solicitado aún no existe :("
    extra={<Button type="primary" href="/">Regresar a index</Button>}
  />
  );
}

export default App_EN;
