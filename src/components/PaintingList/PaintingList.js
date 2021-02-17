import React from 'react';
import PropTypes from 'prop-types';
import PaintingListItem from './PaintingListItem';
import './PaintingList.css';

const PaintingList = ({ paintings }) => (
  <ul className="PaintingList">
    {paintings.map(paintingEl => (
      <PaintingListItem key={paintingEl.id} paintingEleents={paintingEl} />
    ))}
  </ul>
);

PaintingList.propTypes = {
  paintings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PaintingList;
