import React, { Component } from 'react'
import './header.css';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';

class Header extends Component {
state = {  }
render() { 
return ( 
    <div className='header'>
<Row>
<Col span={12+2}>
    <Row>
        <Col span={12}>
        <h1 className='font' style={{ marginTop: 4,marginBottom: 9,marginLeft:'66%',color: 'white' }}>facebook</h1>
        </Col>
    </Row>

</Col>
<Col span={12-2}>
    <Row className = 'loginContainer'>
        <Col span={6}>
            <label className='label'>Email or Phone</label>
        <Input style={{height: 25,borderColor:'#29487d'}}/>
        </Col>
        <Col span={6} style={{marginLeft: 18}}>
        <label className='label'>Password</label>
        <Input.Password style={{height: 25,borderColor:'#29487d'}} />
        {/* <Button type="primary">Primary</Button> */}
        <div className='forgotPasword' style={{marginBottom:'-13%',marginLeft:'-24%'}}><a style={{color:'#aeb8ce'}} href="https://www.facebook.com/recover/initiate?lwv=110&amp;ars=royal_blue_bar">Forgotten account?</a></div>
        </Col>
        <Col span={6}>
        <Button className="login_button" type="primary">LogIn</Button>
        </Col>
        <Col span={6}>
        
        </Col>
    </Row>
</Col>
</Row>
</div>
);
}
}

export default Header;