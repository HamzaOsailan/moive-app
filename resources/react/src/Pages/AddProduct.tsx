import React, { useState } from 'react';
import { Breadcrumb, Row, Col, message } from 'antd';
import { Button, Form, Input, Card, Typography, Upload } from 'antd';
import { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import ImgCrop from 'antd-img-crop';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const { TextArea } = Input;
// const navigate = useNavigate();
const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 }, // Updated the wrapperCol span
};

export const AddProduct = () => {
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList([...newFileList]);
    };

    const onPreview = async (file: UploadFile) => {
        let src = file.url as string;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj as RcFile);
                reader.onload = () => resolve(reader.result as string);
            });
        }
        const imgWindow = window.open(src);
        imgWindow?.document.write(`<img src="${src}" alt="${file.name}" />`);
    };

    const handleSubmit = async (values: any) => {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('description', values.description);

        if (fileList.length > 0 && fileList[0].originFileObj) {
            formData.append('photo', fileList[0].originFileObj);
        }
        formData.append('type', values.type);
        formData.append('quantity', values.quantity); // Change 'quantity' to 'inventory'
        formData.append('price', values.price); // Change 'price' to 'quantity'
        
   

        try {
            const response = await axios.post('http://localhost:8000/api/add_product', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(response.data);
            if (response.status === 200) {
                message.success('Product added successfully');
                
               
            } else {
                message.error('Error submitting form');
            }
        } catch (error) {
            console.error(error);
          
        }
    };

    const styleColor={
        color:'white'
    }
    return (
        <>
            <Breadcrumb style={styleColor}
                items={[
                    {
                        href: '/',
                        title: <HomeOutlined style={styleColor}/>,
                    },
                    {
                        href: '/add',
                        title: (
                            <>
                                <UserOutlined style={styleColor} />
                                <span style={styleColor}>Add Product</span>
                            </>
                        ),
                    },
                ]}
            />
            <Typography.Title style={{color:'white'}}>Add Product</Typography.Title>
            <Form
                form={form}
                name="validateOnly"
                layout="vertical"
                onFinish={handleSubmit}
                autoComplete="off"
                encType="multipart/form-data"
            >
                <Row gutter={12}>
                    <Col span={12}>
                        <Card>
                            <Form.Item name="name" label="Name">
                                <Input />
                            </Form.Item>

                            <Form.Item name="description" label="Description" rules={[{ required: true }]}>
                                <TextArea style={{ marginBottom: 15 }} showCount maxLength={100} placeholder="Can resize" />
                            </Form.Item>


                            <ImgCrop rotationSlider>
                                <Upload
                                    name="photo" // Ensure this matches the name used in Laravel
                                    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                    listType="picture-card"
                                    fileList={fileList}
                                    onChange={onChange}
                                    onPreview={onPreview}
                                >
                                    {fileList.length < 5 && '+ Upload'}
                                </Upload>
                            </ImgCrop>

                        </Card>
                    </Col>

                    <Col span={12}>
                        <Card>
                            <Form.Item name="type" label="Type">
                                <Input />
                            </Form.Item>
                            <Form.Item name="quantity" label="Quantity">
                                <Input />
                            </Form.Item>
                            <Form.Item name="price" label="Price">
                                <Input />
                            </Form.Item>
                        </Card>
                    </Col>

                    <Col span={24}>
                        <Form.Item {...formTailLayout}>
                            <Button type="primary" htmlType="submit">
                                ADD
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    );
};
