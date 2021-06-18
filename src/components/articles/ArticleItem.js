import React from 'react';
import PropTypes from 'prop-types';

const ArticleItem = ({ article: { id, title, abstract, section, media, byline, published_date,url } }) => {
  return (
    <div className="card">
      <h6 className="topic">{section}</h6>
      <img src={media} alt="" className="round-img" style={{ width: '60px' }} />
      <h4>{title}</h4>
      <h5>{byline}</h5>
      <h5>{published_date}</h5>
      <h6>{abstract}</h6>

      <div>

      <a  href={ url }>
          <button className="btn btn-info btn-sm">Continue reading</button>
      </a>
      </div>
    </div>
  );
};

ArticleItem.propTypes = {
  article: PropTypes.object.isRequired,
};

export default ArticleItem;
