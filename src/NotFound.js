import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import './App.css';
import 'antd/dist/antd.css';
import { Result, Button } from 'antd';

import { Layout } from 'antd';

function NotFound() {

  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./404_page.json')
    })
  },[])
  


  return (
    <div className='App'>
      <div className='container' ref={container}>
      </div>
      <div className="container-fluid">
        <div className="titleHolder">
            <Button href="/">Back to index</Button>
        </div>
      
      </div>
    </div>
  );
}

export default NotFound;
