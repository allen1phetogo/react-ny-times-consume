import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';

import { Link } from 'react-router-dom';
import NytimesContext from '../../context/nytimes/nytimesContext';

const Article = ({ match }) => {
  const nytimesContext = useContext(NytimesContext);

  const { searchArticles, loading, article } = nytimesContext;

  useEffect(() => {
    searchArticles(7);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    published_date,
    bio,
    blog,
    login,
    url,
  } = article;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back To Search
      </Link>

      <div className="card grid-2">
        <div className="all-center">
          <img
            src={url}
            className="round-img"
            alt=""
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Published_date: {published_date}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={url} className="btn btn-dark my-1">
            Visit Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>
              )}
            </li>

            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong> {company}
                </Fragment>
              )}
            </li>

            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
     
    </Fragment>
  );
};

export default Article;
