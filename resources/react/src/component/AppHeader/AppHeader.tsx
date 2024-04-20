import {
  Avatar,
  Badge,
  Image,
  Input,
  Space,
  Typography,
  Button,
  message
} from 'antd'

import {
  BellFilled,
  MailOutlined,
  AudioOutlined
} from "@ant-design/icons";


import Search,
{
  SearchProps
} from 'antd/es/input/Search';
import {
  useLocation,
  useNavigate,
  useParams
} from 'react-router-dom';

import axios from 'axios';

export const AppHeader = () => {
  const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
  const location = useLocation();
  const navigate = useNavigate();

  const hideLoginButtonRoutes = ['/admin', '/inventory', '/edit/:id', '/delete/:id', '/add',];
  const shouldHideLoginButton = hideLoginButtonRoutes.includes(location.pathname);

  const handleLogout = async () => {
    const token = localStorage.getItem('token');


    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    await axios.post('http://127.0.0.1:8000/api/auth/logout', {}, config)
      .then(() => {
        message.success('Successfully logged out');
        localStorage.removeItem('token');
        navigate('/');
      }).catch((err) => {
        message.error(err.response.data.message);
      });
  }
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 12px'
    }}>
      <Avatar
        size={45}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlPlTLFbhgKeaas5SYAh2s6g5i-eWKsg0cLg&usqp=CAU'
      ></Avatar>
      <Typography.Title style={{ color: 'white' }}>MOVIELIST</Typography.Title>
      <Space>
        <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />

        {!shouldHideLoginButton && <Button type="primary" href='/login'>LOGIN</Button>}

        {shouldHideLoginButton && <Button type="primary" onClick={handleLogout}>LOGOUT</Button>}




      </Space>
    </div>
  )
}
