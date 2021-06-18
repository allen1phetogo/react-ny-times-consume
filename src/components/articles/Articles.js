import React, { useContext } from 'react';
import ArticleItem from './ArticleItem';
import Spinner from '../layout/Spinner';
import NytimesContext from '../../context/nytimes/nytimesContext';

const Articles = () => {
  const nytimesContext = useContext(NytimesContext);

  const { loading, articles } = nytimesContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={articleStyle}>
        {articles.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </div>
    );
  }
};

const articleStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Articles;
