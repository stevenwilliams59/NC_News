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
      params: { slug: topic }
    })
    .then(({ data }) => {
      return data.articles;
    });
};
