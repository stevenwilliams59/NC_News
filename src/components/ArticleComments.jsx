import React, { Component } from 'react';
import * as api from '../api';
import UpdateCommentVotes from './UpdateCommentVotes';
import AddComment from './AddComment';

export default class ArticleComments extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    api.getCommentsByArticleById(this.props.article_id).then((comments) => {
      this.setState({ comments: comments.comments });
    });
  }
  updateComments = (newComment) => {
    this.setState((currentState) => ({
      comments: [newComment, ...currentState.comments]
    }));
  };

  render() {
    const { comments } = this.state;

    if (!comments) return <p>No comments posted</p>;
    return (
      <>
        <AddComment
          id={this.props.article_id}
          updateComments={this.updateComments}
          userName={this.props.userName}
        />
        <main className="comments">
          {comments.map((comment) => {
            return (
              <section className="comments" key={comment.comment_id}>
                <p>{comment.author}</p>
                <UpdateCommentVotes
                  votes={comment.votes}
                  id={comment.comment_id}
                />
                <p>posted at {comment.created_at}</p>
                <p>{comment.body}</p>
              </section>
            );
          })}
        </main>
      </>
    );
  }
}
