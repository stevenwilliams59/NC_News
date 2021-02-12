import React, { Component } from 'react';
import * as api from '../api';

export default class UpdateCommentVotes extends Component {
  state = {
    voteChange: 0
  };
  render() {
    const { votes } = this.props;
    const { voteChange } = this.state;
    return (
      <div className="updateVotes">
        <button
          disabled={voteChange === 1}
          onClick={() => {
            this.handleClick(1);
          }}
        >
          up
        </button>
        <p>{votes + voteChange}</p>
        <button
          disabled={voteChange === -1}
          onClick={() => {
            this.handleClick(-1);
          }}
        >
          down
        </button>
      </div>
    );
  }

  handleClick = (voteDiff) => {
    const { id } = this.props;
    this.setState((currentState) => {
      return { voteChange: currentState.voteChange + voteDiff };
    });
    api.updateCommentVotes(id, voteDiff);
  };
}
