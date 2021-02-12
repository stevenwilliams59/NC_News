import * as api from '../api';
import React, { Component } from 'react';

export default class AddComment extends Component {
  state = {
    author: '',
    body: '',
    isLoading: false
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="addCommentForm">
        <p>{this.state.author}</p>
        <textarea
          rows="5"
          cols="40"
          type="text"
          onChange={this.handleChange}
          placeholder="Comment"
          value={this.state.body}
        />

        <button className="commentButton" type="submit">
          ADD COMMENT
        </button>
      </form>
    );
  }
  handleChange = (e) => {
    this.setState(() => {
      return {
        body: e.target.value,
        author: this.props.userName
      };
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { id, userName } = this.props;

    const postData = { username: userName, body: this.state.body };
    console.log(postData);
    api.addComment(id, postData).then((res) => {
      this.props.updateComments(res.data.comment);
    });
    this.setState({ body: '' });
  };
}
