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
  deleteYourComment = (comment_id) => {
    this.setState((currentState) => {
      const updatedComments = currentState.comments.filter((comment) => {
        return comment_id !== comment.comment_id;
      });
      return {
        comments: updatedComments
      };
    });
    api.deleteComment(comment_id);
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
                <p>Posted on {new Date(comment.created_at).toDateString()}</p>
                <p>{comment.body}</p>
                {comment.author === this.props.userName && (
                  <button
                    className="deleteCommentButton"
                    onClick={() => this.deleteYourComment(comment.comment_id)}
                  >
                    DELETE YOUR COMMENT
                  </button>
                )}
              </section>
            );
          })}
        </main>
      </>
    );
  }
}
