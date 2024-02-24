import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import bookPicture from "../../assets/book.png";

import "./Home.scss";

const Home = () => {
  const [data, setData] = useState({});
  const [searchValue, setSearchValue] = useState("");

  const [paginationNumber, setPaginationNumber] = useState(1);

  const navigate = useNavigate();

  const navigateToPreview = (id) => {
    navigate(`/book-preview/${id}`);
  };

  const doSearch = async () => {
    try {
      const res = await fetch(
        `http://localhost:4000/api/search?q=${searchValue}`
      );
      const data = await res.json();

      setData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetch("http://localhost:4000/api/books")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (searchValue.trim()) {
      console.log(searchValue, "s");
      doSearch();
    }
  }, [searchValue]);

  console.log(data);

  return (
    <div className="home">
      <div className="row">
        <h1 className="home--title">Recommended</h1>
        <div className="home__tools">
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="home__tools--search"
            type="text"
            placeholder="Search by author"
          />
        </div>
      </div>
      <ul className="home__list">
        {data.data?.map((book) => {
          const { id, title, author, description } = book;

          return (
            <li
              onClick={() => {
                navigateToPreview(id);
              }}
              key={id}
              className="home__list__item"
            >
              <img
                className="home__list__item--picture"
                src={bookPicture}
                alt="book"
              />
              <div className="home__list__item__content">
                <h1 className="home__list__item__content--title">{title}</h1>
                <h4 className="home__list__item__content--author">{author}</h4>
                <p className="home__list__item__content--description">
                  {description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      <ul className="home__pagination">
        <li className="home__pagination--item">1</li>
        <li className="home__pagination--item">2</li>
        <li className="home__pagination--item">3</li>
        <li className="home__pagination--item">4</li>
      </ul>
    </div>
  );
};

export default Home;
