import { Menu } from 'antd'
import React from 'react'
import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';

export const SideMenu = () => {
  const navigate = useNavigate();
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      onClick={(item) => {
        navigate(item.key);
      }}
      items={[
        {
          label: "Dashbaord",
          icon: <AppstoreOutlined />,
          key: '/'
        },
        {
          label: "Inventory",
          icon: <ShopOutlined />,
          key: '/inventory'
        },
        {
          label: "Orders",
          icon: <ShoppingCartOutlined />,
          key: '/orders'
        },
      ]}>
    </Menu>
  )
}
