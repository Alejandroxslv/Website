import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import Lottie from 'react-lottie';
import './App.css';
import 'antd/dist/antd.css';


import AppHeader from './components/common/header';
import AppFooter from './components/common/footer';
import AppHome from './views/home';

import * as electrical from './electrical.json';
import * as start from './start.json';
import * as location from './world-locations.json';
import * as locationBlue from './locations_blue.json';
import * as success from './success.json';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;


const defaultOptions1 = {
  loop: true,
  autoplay: true, 
  animationData: locationBlue.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const defaultOptions2 = {
  loop: true,
  autoplay: true, 
  animationData: success.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};


function App() {

  const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
        setloading(true);

        setTimeout(() => {
          setcompleted(true);
        }, 1000);
      });
    }, 3000);
  }, []);





  return (
    <>
    {!completed ? (
      <Lottie options={defaultOptions1} height={400} width={400}/>
    ) : (
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
    )}

    </>




    
  );
}



{/* <>
      {!loading ? (
        <Lottie options={defaultOptions1} height={500} width={500}/>
      ) : (
        <Lottie options={defaultOptions2} height={200} width={200}/>
      )}
      </> */}

export default App;
