import React from 'react';
import { Card, Col, Image, Typography } from 'antd';

const { Title, Paragraph } = Typography;

export type CastMember = {
  photo: string;
  name: string;
  description: string;
};

export interface CastProps {
  casts: CastMember[];
}

const Cast: React.FC<CastProps> = ({ casts }) => {
  return (
    <div>
      {casts.map((cast) => (
        <Card key={cast.name} hoverable style={{ width: 240, margin: '10px' }}>
          <Image src={cast.photo} width={200} height={300} />
          <Title level={4}>{cast.name}</Title>
          <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
            {cast.description}
          </Paragraph>
        </Card>
      ))}
    </div>
  );
}

export default Cast;
