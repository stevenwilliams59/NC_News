import React, { Component } from 'react';
import * as api from '../api';
import Article from './Article';

export default class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps) {
    const { topic } = this.props;
    if (topic !== prevProps.topic) {
      this.fetchArticles(topic);
    }
  }

  render() {
    const { articles } = this.state;
    return (
      <main className="list">
        {articles.map((article) => {
          return <Article key={article.title} {...article} />;
        })}
      </main>
    );
  }
  fetchArticles(topic) {
    api.getArticles(topic).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  }
}
