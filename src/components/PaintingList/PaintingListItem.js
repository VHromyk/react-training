import React from 'react';
import Painting from '../Painting/Painting';

const PaintingListItem = ({
  paintingEleents: { url, title, price, author, quantity },
}) => {
  return (
    <li>
      <Painting
        url={url}
        title={title}
        price={price}
        profileURL={author.url}
        tag={author.tag}
        quantity={quantity}
      />
    </li>
  );
};

export default PaintingListItem;
