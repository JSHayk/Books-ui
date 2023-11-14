import React, { useEffect, useState } from 'react';

import bookPicture from '../../assets/book.png';

import './Home.scss'

const Home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('http://localhost:4000/api/books')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setData(data);
    });
  }, []);


  return (
    <div className='home'>
      <h1 className="home--title">Recommended</h1>
      <ul className='home__list'>
        {
          data.list?.map(book => {
            const { 
              id,
              title, 
              author,
              description
            } = book;

            return (
              <li key={id} className='home__list__item'>
                <img className='home__list__item--picture' src={bookPicture} alt="book" />
                <div className='home__list__item__content'>
                  <h1 className='home__list__item__content--title'>
                    { title }
                  </h1>
                  <h4 className='home__list__item__content--author'>
                    { author }
                  </h4>
                  <p className='home__list__item__content--description'>
                    { description }
                  </p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Home
