import React, { Component } from 'react';
import * as api from '../api';
import Article from './Article';
import ErrorHandler from './ErrorHandler';
import { Select } from 'evergreen-ui';

const SORT_OPTIONS = {
  VOTES_ASC: 'VOTES_ASC',
  VOTES_DESC: 'VOTES_DESC',
  CREATED_AT_ASC: 'CREATED_AT_ASC',
  CREATED_AT_DESC: 'CREATED_AT_DESC'
};

export default class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    errMessage: '',
    sortBy: SORT_OPTIONS.CREATED_AT_DESC
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

  sortedArticles() {
    return this.state.articles.sort((a, b) => {
      if (this.state.sortBy === SORT_OPTIONS.VOTES_DESC) {
        return b.votes - a.votes;
      }
      if (this.state.sortBy === SORT_OPTIONS.VOTES_ASC) {
        return a.votes - b.votes;
      }
      if (this.state.sortBy === SORT_OPTIONS.CREATED_AT_DESC) {
        return (
          new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf()
        );
      }
      if (this.state.sortBy === SORT_OPTIONS.CREATED_AT_ASC) {
        return (
          new Date(a.created_at).valueOf() - new Date(b.created_at).valueOf()
        );
      }
      return 1;
    });
  }

  render() {
    const { articles, errMessage } = this.state;
    if (errMessage) return <ErrorHandler msg={errMessage} />;
    if (articles.length === 0)
      return <h2>No articles here. Be the first to post!!</h2>;
    const sorted = this.sortedArticles();
    return (
      <main className="list">
        <label htmlFor="options">sort by:</label>

        <Select
          name="options"
          defaultValue={this.state.sortBy}
          onChange={(event) => {
            this.setState({
              sortBy: event.target.value
            });
          }}
        >
          {Object.values(SORT_OPTIONS).map((option) => {
            return (
              <option key={option} value={option}>
                {option.toLowerCase().replace(/_/g, ' ')}
              </option>
            );
          })}
        </Select>

        {sorted.map((article) => {
          return <Article key={article.title} {...article} />;
        })}
      </main>
    );
  }

  fetchArticles(topic) {
    api
      .getArticles(topic)
      .then((articles) => {
        this.setState({ articles, isLoading: false });
      })
      .catch((err) => {
        this.setState({ errMessage: err.response.data.msg, isLoading: false });
      });
  }
}
