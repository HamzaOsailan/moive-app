import React from 'react';
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Typography
} from 'antd';
import { AppHeader } from './component/AppHeader/AppHeader';
import { PageContent } from './component/PageContent/PageContent';
import Login from './Pages/Login';
import MovieListPage from './Pages/MovieListPage';
import { GuestRoutes } from './component/guest/GuestRoutes';
import {
  useNavigate,
  useParams
} from 'react-router-dom';
import { AdminRoutes } from './component/AppRoutes/AppRoutes';
const {
  Header,
  Content,
  Footer } = Layout;

const { Title } = Typography;

const Guest: React.FC = () => {



  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout >
 
        <AppHeader />
      
      

      <Content >
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div
          style={{
            // background: '#141414',
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <AdminRoutes />
        </div>
      </Content>
      <Footer style={{
        textAlign: 'center'
      }}>
        MOIVE APP ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default Guest;