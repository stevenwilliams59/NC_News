import axios from 'axios';

export const getTopics = () => {
  return axios
    .get('https://northcoders--news--project.herokuapp.com/api/topics')
    .then(({ data }) => {
      return data.topics;
    });
};

export const getArticles = (topic) => {
  return axios
    .get('https://northcoders--news--project.herokuapp.com/api/articles', {
      params: { topic: topic }
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getArticleById = (article) => {
  return axios
    .get(
      `https://northcoders--news--project.herokuapp.com/api/articles/${article}`
    )
    .then(({ data }) => {
      return data;
    });
};

export const getCommentsByArticleById = (id) => {
  return axios
    .get(
      `https://northcoders--news--project.herokuapp.com/api/articles/${id}/comments`
    )
    .then(({ data }) => {
      return data;
    });
};

export const updateVotes = (id, voteDiff) => {
  return axios.patch(
    `https://northcoders--news--project.herokuapp.com/api/articles/${id}`,
    {
      inc_votes: voteDiff
    }
  );
};

export const updateCommentVotes = (id, voteDiff) => {
  return axios.patch(
    `https://northcoders--news--project.herokuapp.com/api/comments/${id}`,
    {
      inc_votes: voteDiff
    }
  );
};

export const addComment = (id, postData) => {
  return axios.post(
    `https://northcoders--news--project.herokuapp.com/api/articles/${id}/comments`,
    postData
  );
};
export const deleteComment = (comment_id) => {
  return axios.delete(
    `https://northcoders--news--project.herokuapp.com/api/comments/${comment_id}`
  );
};
export const sortArticlesByQuery = (query) => {
  return axios.get(
    `https://northcoders--news--project.herokuapp.com/api/articles?${query}`
  );
};
