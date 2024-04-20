import React from 'react';
import {
  Button,
  Form,
  Input,
  Typography,
  Space,
  message
} from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom'

//email:hamzaosailan@hotmail.com
//password:a123
const Login: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    console.log('Success:', values);
    try {
      const res = await axios.post('http://localhost:8000/api/auth/login', values);
      console.log(res.data);
      localStorage.setItem('token',res.data.access_token); 
      message.success('successfully logged in')
      navigate('/admin');
    } catch (err) {
      message.error('email or password not correct!')
      navigate('/login');
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Space
      direction="vertical"
      size="small"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Typography.Title style={{color:'white'}}>LOGIN</Typography.Title>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );
};

export default Login;
