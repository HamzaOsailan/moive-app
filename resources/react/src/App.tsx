import './App.css'
import React, { useState } from 'react';
import { AppHeader } from './component/AppHeader/AppHeader';
import { SideMenu } from './component/SideMenu/SideMenu';
import { PageContent } from './component/PageContent/PageContent';
import { AppFooter } from './component/AppFooter/AppFooter';


import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import { Layout, Menu, Button, theme } from 'antd';

import { AdminRoutes } from './component/AppRoutes/AppRoutes';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
    {/* <div className='App'>
         <AppHeader/>
         <div className='SideMenuAndPageContent'>
          <SideMenu></SideMenu>
          <PageContent></PageContent>
         </div>
         <AppFooter/>
    </div> */}

      <Layout >
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <SideMenu />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer  }}>
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
              height: "87.9vh",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <AdminRoutes />
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default App
