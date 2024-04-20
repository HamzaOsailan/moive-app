import React from 'react';
import { Card, Col, Image, Row, Space, Typography } from 'antd';
import Cast from './Cast';
import { StarFilled } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

type CastMember = {
  photo: string;
  name: string;
  description: string;
};

type Movie = {
  title: string;
  imageUrl: string;
  rate: number;
  description: string;
  date: string;
};

interface ShowProps {
  movie: Movie;
  casts: CastMember[];
}

const Show: React.FC<ShowProps> = ({ movie, casts }) => {
  return (
    <>
      <Title level={2}>{movie.title}</Title>
      <Row gutter={16} justify="center">
        <Col span={24}>
          <Image src={movie.imageUrl} width={200} height={300} />
          <Space direction='vertical'>
            <Title level={5} style={{ margin: 10 }}>{movie.title}</Title>
            <Space>
              <StarFilled spin={false} style={{ color: 'yellow' }} />
              <p>{`${movie.rate}% | ${movie.date}`}</p>
            </Space>
            <Paragraph>
              {movie.description}
            </Paragraph>
          </Space>
        </Col>
      </Row>
      <Row gutter={16} justify="center">
        <Col>
          <Cast casts={casts} />
        </Col>
      </Row>
    </>
  );
}

export default Show;
