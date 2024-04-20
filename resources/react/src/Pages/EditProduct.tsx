import {
    Breadcrumb,
    Row,
    Col,
    message,
    notification,
    Button,
    Form,
    Input,
    Card,
    Typography,
    Upload,
} from 'antd';
import {
    RcFile,
    UploadFile,
    UploadProps
} from 'antd/es/upload/interface';
import ImgCrop from 'antd-img-crop';
import {
    HomeOutlined,
    UserOutlined
} from '@ant-design/icons';
import axios from 'axios';
import {
    useNavigate,
    useParams
} from 'react-router-dom';
import {
    useEffect,
    useState
} from 'react';

const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
};

export const EditProduct = () => {
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const { id } = useParams();
    const { TextArea } = Input;
    const navigate = useNavigate();

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

    useEffect(() => {
        getProduct();
    }, [id, form]);

    const getProduct = async () => {
        axios.get(`http://localhost:8000/api/get_product_id/${id}`)
            .then(response => {
                form.setFieldsValue(response.data.product);
            })
            .catch(() => {
                message.error('Error fetching product');
            });
    }



    const handleSubmit = async (values: any) => {
        // const formData = new FormData();
        // formData.append('name', values.name);
        // formData.append('description', values.description);
        // if (fileList.length > 0 && fileList[0].originFileObj) {
        //     formData.append('photo', fileList[0].originFileObj);
        // }
        // formData.append('type', values.type);
        // formData.append('quantity', values.quantity);
        // formData.append('price', values.price);


        const payload: any = {
            name: values.name,
            description: values.description,
            photo: fileList[0].originFileObj,
            type: values.type,
            quantity: values.quantity,
            price: values.price
        };

        console.log(payload);

        const requestConfig:any = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        console.log("payload= ", payload);
        try {
            await axios.put(`http://localhost:8000/api/update_product/${id}`, payload, requestConfig)
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })




            notification.success({
                message: 'Product updated successfully',
            });
            navigate('/');


        } catch (error) {
            notification.error({
                message: 'Error updating product',

            });
        }
    };


    return (
        <>
            <Breadcrumb
                items={[
                    {
                        href: '/',
                        title: <HomeOutlined />,
                    },
                    {
                        href: '/add',
                        title: (
                            <>
                                <UserOutlined />
                                <span>Add Product</span>
                            </>
                        ),
                    },
                ]}
            />
            <Typography.Title>Edit Product</Typography.Title>
            <Form
                form={form}
                name="validateOnly"
                layout="vertical"
                onFinish={handleSubmit}
                autoComplete="off"
                // encType="multipart/form-data"
            >
                <Row gutter={12}>
                    <Col span={12}>
                        <Card>
                            <Form.Item name="name" label="Name">
                                <Input />
                            </Form.Item>

                            <Form.Item name="description" label="Description" >
                                <TextArea style={{ marginBottom: 15 }} showCount maxLength={100} placeholder="Can resize" />
                            </Form.Item>

                            <Form.Item name="photo" label="photo" >

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
                            </Form.Item>
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
                                Update
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    );
};
