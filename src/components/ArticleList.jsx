import React, { Component } from 'react';
import * as api from '../api';
import Article from './Article';
import ErrorHandler from './ErrorHandler';

export default class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    errMessage: ''
  };

  componentDidMount() {
    const { topic } = this.props;
    this.fetchArticles(topic);
  }

  componentDidUpdate(prevProps) {
    const { topic } = this.props;
    if (topic !== prevProps.topic) {
      this.fetchArticles(topic);
    }
  }

  render() {
    const { articles, errMessage } = this.state;
    if (errMessage) return <ErrorHandler msg={errMessage} />;
    if (articles.length === 0)
      return <h2>No articles here. Be the first to post!!</h2>;
    return (
      <main className="list">
        {articles.map((article) => {
          return <Article key={article.title} {...article} />;
        })}
      </main>
    );
  }
  fetchArticles(topic, sort_by) {
    api
      .getArticles(topic, sort_by)
      .then((articles) => {
        this.setState({ articles, isLoading: false });
      })
      .catch((err) => {
        this.setState({ errMessage: err.response.data.msg, isLoading: false });
      });
  }
}
