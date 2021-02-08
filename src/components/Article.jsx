import React from 'react';

const article = ({ title, topic, votes, comment_count }) => {
  return (
    <section className="article">
      <h3>{title}</h3>
      <p>{topic}</p>
      <p>{votes}</p>
      <p>{comment_count}</p>
    </section>
  );
};
export default article;
