import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import bookPicture from '../assets/book.png';

export function BookPreview() {
  const [data, setData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/api/books/${id}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      setData(data);
    })
    .catch(err => {
      console.error(err);
    })
  }, []);

	return (
		<>
		 {
		 	data && (
	 		<li key={data.id} className='home__list__item'>
                <img className='home__list__item--picture' src={bookPicture} alt="book" />
                <div className='home__list__item__content'>
                  <h1 className='home__list__item__content--title'>
                    { data.title }
                  </h1>
                  <h4 className='home__list__item__content--author'>
                    { data.author }
                  </h4>
                  <p className='home__list__item__content--description'>
                    { data.largeDescription }
                  </p>
                </div>
              </li>
	 		)
		 }
		</>
	)
}