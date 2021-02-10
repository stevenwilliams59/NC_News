import React, { Component } from 'react';
import * as api from '../api';

export default class ArticleComments extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    api.getCommentsByArticleById(this.props.article_id).then((comments) => {
      this.setState({ comments: comments.comments });
    });
  }

  render() {
    const { comments } = this.state;

    if (!comments) return <p>No comments posted</p>;
    return (
      <main className="comments">
        {comments.map((comment) => {
          return (
            <section className="comments" key={comment.comment_id}>
              <p>votes : {comment.votes}</p>
              <p>{comment.author}</p>
              <p>posted at {comment.created_at}</p>
              <p>{comment.body}</p>
            </section>
          );
        })}
      </main>
    );
  }
}
