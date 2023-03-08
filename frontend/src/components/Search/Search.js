import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classes from './search.module.css';

export default function Search() {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();
  const { searchTerm } = useParams();

  const search = async () => {
    term ? navigate('/search/' + term) : navigate('/');
  };
  return (
    <div className={classes.container}>
      <input
        type="text"
        placeholder="Search Food Mine!"
        onChange={e => setTerm(e.target.value)}
        onKeyUp={e => e.key === 'Enter' && search()}
        defaultValue={searchTerm}
      />
      <button onClick={search}>Search</button>
    </div>
  );
}
