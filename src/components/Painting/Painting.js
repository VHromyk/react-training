import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './love-is.png';
import './Painting.css';

// console.log(defaultImage);

const Painting = ({ url, title, profileURL, tag, price, quantity }) => (
  <div className="Painting">
    <img src={url} alt={title} width="370" />
    <h2>{title}</h2>
    <p>
      Автор:
      <a href={profileURL}>{tag}</a>
    </p>
    <p>Цена: {price} кредитов</p>
    <p>
      Доступность:
      {quantity < 10 ? 'Товар заканчивается' : 'Есть на складе'}
    </p>
    <button type="button">Добавить в корзину</button>
  </div>
);

Painting.defaultProps = {
  url: defaultImage,
};

// Если пропс обьязательный к нему не нужно прописывать defaultProps, если бекенд не гарантирует пропс к нему нужно прописать дефолтный.

// PropTypes обьязательны в каждом проекте для каждого компонента.

Painting.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  profileURL: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;
