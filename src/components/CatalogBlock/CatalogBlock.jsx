import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItem } from '../../redux/slices/cartSlice';

const CatalogBlock = ({ name, price, image, type, id }) => {
  const [onType, setOnType] = useState(0);
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cartReducer.items.find((obj) => obj.id === id));
  const itemCount = cartItem ? cartItem.count : 0;

  const addToCart = () => {
    const item = {
      id,
      name,
      price,
      image,
      type: onType,
    };
    dispatch(addItem(item));
  };

  const handleChangeType = (id) => {
    setOnType(id);
  };

  return (
    <div className="catalog-block">
      <img className="catalog-block__image" src={image} alt="Item" />
      <h4 className="catalog-block__title">{name}</h4>
      <div className="catalog-block__selector">
        <ul>
          {type.map((type, id) => (
            <li
              key={id}
              onClick={() => {
                handleChangeType(id);
              }}
              className={onType === id ? 'active' : ''}>
              {type}
            </li>
          ))}
        </ul>
      </div>
      <div className="catalog-block__bottom">
        <div className="catalog-block__price"> {price} ₴</div>
        <div onClick={addToCart} className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Add to Cart</span>
          {itemCount > 0 && <i>{itemCount}</i>}
        </div>
      </div>
    </div>
  );
};

export default CatalogBlock;
