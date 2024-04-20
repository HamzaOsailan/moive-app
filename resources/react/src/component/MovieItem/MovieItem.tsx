import {
    Col,
    Typography,
    Image,
    Space,
    Card
} from 'antd';

import { StarFilled } from '@ant-design/icons';

type Movie = {
    title: string;
    imageUrl: string;
    rate: number;
    date: string;
    description: string;
};

type MovieItemProps = {
    movie: Movie;
};

// const formatDate = (date: Date) => {
//     const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//     const day = date.getDate(); // Use getDate() instead of getDay()
//     const monthIndex = date.getMonth(); // getMonth() returns 0-11
//     const year = date.getFullYear();

//     return `${monthNames[monthIndex]} ${day}, ${year}`;
// };


const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
    // const colStyle = {
    //     padding: '20px',
    //     cursor: 'pointer',
    //     margin: '12px',
    //     maxWidth: '240px', // Optional: to ensure cards don't get too
    // };

    // const paragraphStyle = {
    //     color: 'white', // Ensure Paragraph text is also white
    // };
    // const itemStyle = {
    //     margin: '0px',
    //     color: 'white' // Remove bottom margin
    // };


    const {
        Title,
        Paragraph
    } = Typography;

    // type CastSectionProps = {
    //     cast: CastMember[];
    // };

    return (
        <>
            <div style={{ width: 200 }}>
                <Image src={movie.imageUrl} width={200} height={300} />
                <Space direction='vertical'>
                    <Title level={5} style={{ margin: 10 }} >{movie.title}</Title>
                    <Space >
                        <StarFilled spin={false} style={{ color: 'yellow' }} />
                        <p>{`${movie.rate}% | ${movie.date}`}</p>
                    </Space>
                    <Paragraph >
                        {movie.description}
                    </Paragraph>
                </Space>
{/* 
                {cast.map((member, index) => (
                    <Col key={index} xs={24} sm={12} lg={6}>
                        <Card hoverable style={{ width: 240, textAlign: 'center' }}>
                            <Image src={member.photoUrl} alt={member.name} width={200} height={300} />
                            <Title level={5}>{member.name}</Title>
                            <Paragraph>{member.description}</Paragraph>
                        </Card>
                    </Col>
                ))} */}
            </div>
        </>
    );
};

export default MovieItem;