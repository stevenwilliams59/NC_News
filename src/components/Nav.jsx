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
        {topics.map((topic) => {
          console.log(topic);
          return (
            <Link to={`/${topic.slug}`} key={topic.slug}>
              {topic.slug}
            </Link>
          );
        })}
      </nav>
    );
  }

  fetchTopics() {
    api.getTopics().then((topics) => {
      this.setState({ topics });
    });
  }
}
