
import { 
  Col,
  Row, 
  Space, 
  Typography 
} from 'antd';

import dayjs from 'dayjs';

import MovieItem from '../component/MovieItem/MovieItem';
import { isElement } from 'react-dom/test-utils';

const movies = [
  {
    title: "Ad Astra",
    imageUrl: "https://th.bing.com/th/id/OIP.Q6lw2hJ0G0Kr_DRi5PyLqQHaLH?w=186&h=279&c=7&r=0&o=5&pid=1.7",
    rate: 59,
    date:dayjs(new Date()).format("MMM D YYYY"),
    description: "Adventure, Drama, Mystery, Science Fiction, Thriller",
  },
  {
    title: "Ad Astra",
    imageUrl: "https://th.bing.com/th/id/OIP.Q6lw2hJ0G0Kr_DRi5PyLqQHaLH?w=186&h=279&c=7&r=0&o=5&pid=1.7",
    rate: 59,
    date:dayjs(new Date()).format("MMM D YYYY"),
    description: "Adventure, Drama, Mystery, Science Fiction, Thriller",
  },
  {
    title: "Ad Astra",
    imageUrl: "https://th.bing.com/th/id/OIP.Q6lw2hJ0G0Kr_DRi5PyLqQHaLH?w=186&h=279&c=7&r=0&o=5&pid=1.7",
    rate: 59,
    date:dayjs(new Date()).format("MMM D YYYY"),
    description: "Adventure, Drama, Mystery, Science Fiction, Thriller",
  },
  {
    title: "Ad Astra",
    imageUrl: "https://th.bing.com/th/id/OIP.Q6lw2hJ0G0Kr_DRi5PyLqQHaLH?w=186&h=279&c=7&r=0&o=5&pid=1.7",
    rate: 59,
    date:dayjs(new Date()).format("MMM D YYYY"),
    description: "Adventure, Drama, Mystery, Science Fiction, Thriller",
  },
  {
    title: "Ad Astra",
    imageUrl: "https://th.bing.com/th/id/OIP.Q6lw2hJ0G0Kr_DRi5PyLqQHaLH?w=186&h=279&c=7&r=0&o=5&pid=1.7",
    rate: 59,
    date:dayjs(new Date()).format("MMM D YYYY"),
    description: "Adventure, Drama, Mystery, Science Fiction, Thriller",
  },
  {
    title: "Ad Astra",
    imageUrl: "https://th.bing.com/th/id/OIP.Q6lw2hJ0G0Kr_DRi5PyLqQHaLH?w=186&h=279&c=7&r=0&o=5&pid=1.7",
    rate: 59,
    date:dayjs(new Date()).format("MMM D YYYY"),
    description: "Adventure, Drama, Mystery, Science Fiction, Thriller",
  },
  {
    title: "Ad Astra",
    imageUrl: "https://th.bing.com/th/id/OIP.Q6lw2hJ0G0Kr_DRi5PyLqQHaLH?w=186&h=279&c=7&r=0&o=5&pid=1.7",
    rate: 59,
    date:dayjs(new Date()).format("MMM D YYYY"),
    description: "Adventure, Drama, Mystery, Science Fiction, Thriller",
  },
  {
    title: "Ad Astra",
    imageUrl: "https://th.bing.com/th/id/OIP.Q6lw2hJ0G0Kr_DRi5PyLqQHaLH?w=186&h=279&c=7&r=0&o=5&pid=1.7",
    rate: 59,
    date:dayjs(new Date()).format("MMM D YYYY"),
    description: "Adventure, Drama, Mystery, Science Fiction, Thriller",
  },
  {
    title: "Ad Astra",
    imageUrl: "https://th.bing.com/th/id/OIP.Q6lw2hJ0G0Kr_DRi5PyLqQHaLH?w=186&h=279&c=7&r=0&o=5&pid=1.7",
    rate: 59,
    date:dayjs(new Date()).format("MMM D YYYY"),
    description: "Adventure, Drama, Mystery, Science Fiction, Thriller",
  },
  {
    title: "Ad Astra",
    imageUrl: "https://th.bing.com/th/id/OIP.Q6lw2hJ0G0Kr_DRi5PyLqQHaLH?w=186&h=279&c=7&r=0&o=5&pid=1.7",
    rate: 59,
    date:dayjs(new Date()).format("MMM D YYYY"),
    description: "Adventure, Drama, Mystery, Science Fiction, Thriller",
  },
  {
    title: "Ad Astra",
    imageUrl: "https://th.bing.com/th/id/OIP.Q6lw2hJ0G0Kr_DRi5PyLqQHaLH?w=186&h=279&c=7&r=0&o=5&pid=1.7",
    rate: 59,
    date:dayjs(new Date()).format("MMM D YYYY"),
    description: "Adventure, Drama, Mystery, Science Fiction, Thriller",
  },
  {
    title: "Ad Astra",
    imageUrl: "https://th.bing.com/th/id/OIP.Q6lw2hJ0G0Kr_DRi5PyLqQHaLH?w=186&h=279&c=7&r=0&o=5&pid=1.7",
    rate: 59,
    date:dayjs(new Date()).format("MMM D YYYY"),
    description: "Adventure, Drama, Mystery, Science Fiction, Thriller",
  },
  {
    title: "Ad Astra",
    imageUrl: "https://th.bing.com/th/id/OIP.Q6lw2hJ0G0Kr_DRi5PyLqQHaLH?w=186&h=279&c=7&r=0&o=5&pid=1.7",
    rate: 59,
    date:dayjs(new Date()).format("MMM D YYYY"),
    description: "Adventure, Drama, Mystery, Science Fiction, Thriller",
  },
  {
    title: "Ad Astra",
    imageUrl: "https://th.bing.com/th/id/OIP.Q6lw2hJ0G0Kr_DRi5PyLqQHaLH?w=186&h=279&c=7&r=0&o=5&pid=1.7",
    rate: 59,
    date:dayjs(new Date()).format("MMM D YYYY"),
    description: "Adventure, Drama, Mystery, Science Fiction, Thriller",
  },
  
];

const itemStyle = {
display:'flex',
justifyContent:'center',
background:'red',

};
export default function MovieListPage() {

  const {
    Title,
    Paragraph 
} = Typography;
  
  return (
    <>
      <Title level={2} >Popular Movies</Title>
      <Row gutter={16} justify="center" align='middle' >
        {movies.map((movie) => 
          <Col span={4}> 
            <MovieItem 
              key={movie.title} 
              movie={movie} 
            />
          </Col>
        )}
        
        
      </Row>
    </>
  );
}