import './App.css';
import ArticleList from './components/ArticleList';
import Nav from './components/Nav';
import Title from './components/Title';
import { Router } from '@reach/router';
import ErrorHandler from './components/ErrorHandler';
import EachArticle from './components/EachArticle';
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    userName: 'Steve'
  };
  render() {
    return (
      <div className="App">
        <Title userName={this.state.userName} />
        <Nav />
        <Router>
          <ArticleList path="/" />
          <ArticleList path="/topic/:topic" />
          <EachArticle
            path="/articles/:article_id"
            userName={this.state.userName}
          />
          <ErrorHandler default />
        </Router>
      </div>
    );
  }
}
