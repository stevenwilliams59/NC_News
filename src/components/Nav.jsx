import React, { Component } from 'react';
import * as api from '../api';
import { Link } from '@reach/router';

export default class Nav extends Component {
  state = {
    topics: []
  };
  componentDidMount() {
    this.fetchTopics();
  }

  render() {
    const { topics } = this.state;
    return (
      <nav className="nav">
        <Link to={`/`} key={'all'}>
          {'All Topics'}
        </Link>
        {topics.map((topic) => {
          return (
            <Link to={`/topic/${topic.slug}`} key={topic.slug}>
              {topic.slug}
            </Link>
          );
        })}
      </nav>
    );
  }

  fetchTopics(topic) {
    api.getTopics().then((topics) => {
      this.setState({ topics });
    });
  }
}
