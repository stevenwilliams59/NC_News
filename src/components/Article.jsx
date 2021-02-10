import React from 'react';
import { Link } from '@reach/router';

const article = ({ title, topic, votes, comment_count, body, article_id }) => {
  return (
    <Link to={`/articles/${article_id}`}>
      <section className="article">
        <h3>{title}</h3>
        <p>{topic}</p>
        <p>Votes {votes}</p>
        <p>Comments {comment_count}</p>
        {body.length > 100 ? <p>{body.slice(0, 100)}...</p> : <p>{body}...</p>}
      </section>
    </Link>
  );
};

export default article;
