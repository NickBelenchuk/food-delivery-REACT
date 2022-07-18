import React, { useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import qs from 'qs';

import { SearchContext } from '../App';
import CatalogBlock from '../components/CatalogBlock/CatalogBlock';
import Categories from '../components/Categories/Categories';
import { setCategoryName } from '../redux/slices/categorySlice';
import { useNavigate } from 'react-router-dom';
import { setItems } from '../redux/slices/catalogSlice';

const Home = () => {
  const navigate = useNavigate();
  const API_DB = 'https://62c5384da361f725127d7858.mockapi.io/Catalog';

  const { searchValue } = useContext(SearchContext);
  const dispatch = useDispatch();

  const categoryName = useSelector((state) => state.categoryReducer.categoryName);
  const items = useSelector((state) =>state.catalogReducer.items);

  const onClickCategory = (name) => {
    dispatch(setCategoryName(name));
  };

  const search = searchValue ? `&search=${searchValue}` : '';

  useEffect(() => {
    try {
      const DB = async () => {
        const res = await axios.get(`${API_DB}?filter=${categoryName}${search}`);
        dispatch(setItems(res.data))
      };
      DB();
    } catch (error) {
      console.log(error);
    }
    window.scrollTo(0, 0);
  }, [categoryName, search]);

  useEffect(() => {
    const queryString = qs.stringify({
      categoryName,
    });
    navigate(`?${queryString}`);
  }, [categoryName, navigate]);

  const catalogItems = items.map((item, id) => (
    <CatalogBlock
      key={id}
      name={item.name}
      price={item.price}
      image={item.image}
      type={item.type}
      id={id}
    />
  ));

  return (
    <>
      <div className="content__top">
        <Categories category={categoryName} onClickCategory={onClickCategory} />
      </div>
      <h2 className="content__title">RESULTS</h2>
      <div className="content__items">{catalogItems}</div>
    </>
  );
};

export default Home;
