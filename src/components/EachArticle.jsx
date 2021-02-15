import React, { Component } from 'react';
import * as api from '../api';
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
      <main>
        <p className="articleTitle">{article.title}</p>
        <p className="articleBody">{article.body}</p>
        <UpdateVotes votes={article.votes} id={article.article_id} />
        <ArticleComments
          article_id={this.props.article_id}
          userName={this.props.userName}
        />
      </main>
    );
  }
}

export default EachArticle;
