import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Input,Select} from 'antd';
import { Radio } from 'antd';
import {  Popconfirm, Button } from 'antd'
import { QuestionCircleFilled } from '@ant-design/icons';


import './Body.css';
import connect from './connect.png';

//const { Option } = Select;

class Body extends Component {
    
    state = {
        value: 1,
      };
    
      onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
    }
    
render() { 
    
    const Dates = [];
    for (let i=1; i <= 31; i ++) { Dates.push(i); }
    const Years = [];
    for (let i=1905; i <= 2020; i ++) { Years.push(i); }
    const Months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const text = 'Under Developement.';

return (  
    <div>
        <Row>
            <Col span={3}>
            
            </Col>
            <Col span={8}>
            <div className='helpText'>Facebook helps you connect and share with the people in your life.</div>
            <img  src={connect} alt="" width="537" height="195"></img>
            </Col>
            <Col span={2}>
            </Col>
            <Col span={8}>
            <Row>
                <Col>
                <div className='caa'>Create an account</div>
                <div className='its'>It's quick and easy.</div>
                </Col>
            </Row>
            {/* signUp form start */}
                    <Row style={{marginTop:'5%'}}>
                        <Col span={12}><Input className='input' size="large" style={{width:'105%'}} placeholder="First name" /></Col>
                        <Col span={12}><Input className='input' size="large" style={{width:'80%'}} placeholder="Surname" /></Col>                        
                    </Row>
                    <Row style={{marginTop:'2%'}}>
                        <Col span={12}><Input className='input' size="large" style={{width:'191%'}} placeholder="Mobile number or email address" /></Col>                        
                    </Row>
                    <Row style={{marginTop:'2%'}}>
                        <Col span={12}><Input className='input' size="large" style={{width:'191%'}} placeholder="New password" /></Col>                        
                    </Row>
                    <Row style={{marginTop:'0%'}}>
                        <Col span={12}>
                        <div className='bdy'>Birthday</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} style={{display:'flex'}}>
                        
                        <Input.Group compact>
                        <Select defaultValue="Date">
                        {Dates.map(date => (
                            <option key={date} value={date}>
                                {date}
                            </option>
                            ))}
                        </Select>
                        <Select style={{marginLeft:3}} defaultValue="Month">
                        {Months.map(month => (
                            <option key={month} value={month}>
                                {month}
                            </option>
                            ))}
                        </Select>
                        <Select style={{marginLeft:3,width:'30%'}} defaultValue="Year">
                        {Years.map(year => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                            ))}
                        </Select>
                    {/* <InputNumber style={{marginLeft:2}} /> */}
                    </Input.Group>
                        
                        </Col>
                    </Row>
                    <Row style={{marginTop:'0%'}}>
                        <Col span={12}>
                        <div className='bdy'>Gender</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} style={{marginLeft:'-20%'}}>
                        <Radio.Group onChange={this.onChange} value={this.state.value}>
                            <Radio value={1}>Male</Radio>
                            <Radio value={2}>Female</Radio>
                            <Radio value={3}>Custom</Radio>
                            
                        </Radio.Group>
                        <Popconfirm
                            placement="rightBottom"
                            title={text}
                            okText="Close">
                            <QuestionCircleFilled className='question' />
                        </Popconfirm>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={17} style={{marginTop:12}}>
                        <p style={{textAlign: 'justify'}}>By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} >
                        <Button className='SignUp'>Sign Up</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={14}>
                            <div className='page'>
                            <a href="https://www.facebook.com/pages/create/?ref_type=registration_form" className="_8esh">Create a Page</a>
                            &nbsp; for a celebrity, band or business.
                            </div>
                        
                        </Col>
                    </Row>
            {/* signUp form End */}
            </Col>
            <Col span={3}>
            
            </Col>
        </Row> 
    </div>
);
}
}

export default Body;