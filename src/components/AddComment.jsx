import * as api from '../api';
import React, { Component } from 'react';

export default class AddComment extends Component {
  state = {
    author: 'grumpy19',
    body: ''
  };
  render() {
    console.log(this.props);

    return (
      <form onSubmit={this.handleSubmit} className="addCommentForm">
        <p>{this.state.author}</p>
        <textarea
          rows="5"
          cols="40"
          type="text"
          onChange={this.handleChange}
          placeholder="Comment"
        />

        <button className="commentButton" type="submit">
          ADD COMMENT
        </button>
      </form>
    );
  }
  handleChange = (e) => {
    return { body: e.target.value };
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { id } = this.props;
    const postData = { author: this.state.author, body: this.state.body };
    api.addComment(id, postData).then((res) => {
      this.setState((currentState) => {
        return { comments: currentState.comments };
      });
    });
  };
}
