import React from 'react';
import { Link } from '@reach/router';

const article = ({ title, topic, votes, comment_count, body, article_id }) => {
  return (
    <Link to={`/articles/${article_id}`} className="articleLink">
      <section className={topic}>
        <p className="title">{title}</p>
        <p className="topic">{topic}</p>

        {body.length > 100 ? (
          <p className="body">{body.slice(0, 100)}...</p>
        ) : (
          <p className="body">{body}...</p>
        )}
        <p className="votesAndComments">Likes: {votes} </p>
        <p className="votesAndComments">&#128172; {comment_count}</p>
      </section>
    </Link>
  );
};

export default article;
