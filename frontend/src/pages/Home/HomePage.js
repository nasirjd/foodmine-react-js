import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import Search from '../../components/Search/Search';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import { getAll, search } from '../../services/foodService';

const initialState = { foods: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case 'FOODS_LOADED':
      return { ...state, foods: action.payload };
    default:
      return state;
  }
};

export default function HomePage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { foods } = state;
  const { searchTerm } = useParams();

  useEffect(() => {
    const loadFoods = searchTerm ? search(searchTerm) : getAll();

    loadFoods.then(foods => dispatch({ type: 'FOODS_LOADED', payload: foods }));
  }, [searchTerm]);

  return (
    <>
      <Search />
      <Thumbnails foods={foods} />
    </>
  );
}
