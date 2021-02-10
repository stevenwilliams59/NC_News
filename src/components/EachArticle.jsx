import React, { Component } from 'react';
import * as api from '../api';
import { Link } from '@reach/router';
import ArticleComments from './ArticleComments';
import UpdateVotes from './UpdateVotes';

class EachArticle extends Component {
  state = {
    article: null,
    comments: []
  };

  componentDidMount() {
    api.getArticleById(this.props.article_id).then(({ article }) => {
      this.setState({ article });
    });
  }
  render() {
    const { article } = this.state;
    if (!article) return <p>fetching article!</p>;
    return (
      <main className="article">
        <Link to="/">
          <p>Home</p>
        </Link>
        <p>{article.title}</p>
        <p>{article.body}</p>
        <UpdateVotes votes={article.votes} id={article.article_id} />
        <ArticleComments article_id={this.props.article_id} />
      </main>
    );
  }
}

export default EachArticle;
