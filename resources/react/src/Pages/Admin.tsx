import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {
  EditOutlined,
  DeleteOutlined,
  HomeOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  Space,
  Table,
  Typography,
  Button,
  Row,
  Col,
  message,
  Avatar,
  Image
} from 'antd';

const { Title } = Typography;

export const Admin = () => {
  const navigate = useNavigate();
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {

  }, []);
  const handleDeleteProduct = async (id: number) => {
    try {

      await axios.delete(`http://localhost:8000/api/delete_product/${id}`);
      message.success('Product deleted successfully');
    
    } catch (error) {
      message.error('Error deleting product');
    }
  };

  const columns = [
    {
      title: 'Image',
      dataIndex: 'photo',
      key: 'photo',
      render: (photo: string) => {
        return <Avatar src={`http://localhost:8000/images/${photo}`} />;
      }
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: { key: any; id: number; }) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} href={`/edit/${record.id}`} />
          <Button
            icon={<DeleteOutlined />}
            type="primary"
            danger
            onClick={() => handleDeleteProduct(record.id)}
          >

          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setLoadingProducts(true);

    try {
      const response = await axios.get('http://localhost:8000/api/get_product');
      setDataSource(response.data.products);
      setLoadingProducts(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoadingProducts(false);
    }
  };

  return (
    <>
      <Row justify="space-between" align="middle">
        <Col span={12}>
          <Title>Products</Title>
        </Col>
        <Col span={5}>
          <Button
            block
            type="primary"
            onClick={() => {
              navigate('/add');
            }}
          >
            ADD PRODUCT
          </Button>
        </Col>
      </Row>

      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loadingProducts}
        pagination={false}
      />
    </>
  );
};
