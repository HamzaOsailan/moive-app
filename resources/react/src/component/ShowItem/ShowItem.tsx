
import React from 'react';
import Show from '../../Pages/Show';
import dayjs from 'dayjs';
import Cast from '../../Pages/Cast';

export default function ShowItem() {
  const movie = {
    title: "Ad Astra",
    imageUrl: "https://th.bing.com/th/id/OIP.Q6lw2hJ0G0Kr_DRi5PyLqQHaLH?w=186&h=279&c=7&r=0&o=5&pid=1.7",
    rate: 59,
    date: dayjs(new Date()).format("MMM D YYYY"),
    description: "Adventure, Drama, Mystery, Science Fiction, Thriller",
  };

  const cast = [
    {
      photo: 'url-to-cast-member-image-1',
      name: 'Name 1',
      description: 'Description 1'
    },
    {
      photo: 'url-to-cast-member-image-2',
      name: 'Name 2',
      description: 'Description 2'
    }
  ];

  return (
    <>
    
      <Show movie={movie} casts={cast} />
      <Cast casts={cast} />
    </>
  );
}