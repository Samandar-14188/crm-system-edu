import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import FormDialog from '../../components/mui/dialog';

const { Header, Sider, Content } = Layout;

const Students: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Lidlar',
            },
            {
              key: '2',
              icon: <UserOutlined />,
              label: 'Dars Jadvali',
            },
            {
              key: '3',
              icon: <UserOutlined />,
              label: 'Xodimlar',
            },
            {
              key: '4',
              icon: <UserOutlined />,
              label: 'Umumiy O\'quvchilar',
            },
            {
              key: '5',
              icon: <UserOutlined />,
              label: 'To\'lovlar',
            },
            {
              key: '6',
              icon: <UserOutlined />,
              label: 'Qarzdorlar',
            },          
            {
              key: '7',
              icon: <UserOutlined />,
              label: 'Hisobotlar',
            }            
           ]}

        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <FormDialog />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Students;