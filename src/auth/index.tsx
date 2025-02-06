import { Form, Input, Button, Layout, Typography, Image } from 'antd';
import logo from '../assets/LOGO.svg';
import background from '../assets/loginpage.jpg';
import React from 'react';

const { Content } = Layout;
const { Title } = Typography;

interface AuthFormValues {
  login?: string;
  password?: string;
}

const Auth: React.FC = () => {
  const onFinish = (values: AuthFormValues) => {
    console.log('Success:', values);
    alert('Login submitted (example - no actual login)');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout style={{
      minHeight: '100vh',
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
    }}>
      <div style={{ // Overlay for blur and darkening
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)', // Adjust darkness
      }} />
      <Content
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          position: 'relative', // Ensure content is above the overlay
          zIndex: 1, // Ensure content is above the overlay
        }}
      >
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.85)',
          padding: '40px',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        }}>
          <Image src={logo} alt="Logo" preview={false} style={{ marginBottom: '20px', display: 'block', margin: '0 auto', maxWidth: '200px' }} />
          <Title level={3} style={{ textAlign: 'center', marginBottom: '20px' }}>Welcome</Title>

          <Form
            name="basic"
            style={{ maxWidth: 400 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="login"
              rules={[{ required: true, message: 'Please input your login!' }]}
            >
              <Input placeholder="Login" size="large" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password placeholder="Password" size="large" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%', height: '40px', fontSize: '16px' }}>
                Log In
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </Layout>
  );
};

export default Auth;