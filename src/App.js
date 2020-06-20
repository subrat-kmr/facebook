import React from 'react';
import './App.css';
import { Row, Col } from 'antd';
import Header from './Header/header';
import Body from './Body/Body';
import Footer from './footer/footer';

function App() {
return (
  <div className="App">
    <Row>
      <Col span={24}>
      <Header />
      </Col>
    </Row>
    <Row>
      <Col className='bg' span={24}>
        <Body />
      </Col>
    </Row> 
  <Row>
    <Col span={24}><Footer /></Col>
  </Row>
  </div>
);
}

export default App;
