import './App.css';
import ArticleList from './components/ArticleList';
import Nav from './components/Nav';
import Title from './components/Title';
import { Router } from '@reach/router';
import ErrorHandler from './components/ErrorHandler';
import EachArticle from './components/EachArticle';

function App() {
  return (
    <div className="App">
      <Title />
      <Nav />
      <Router>
        <ArticleList path="/" />
        <ArticleList path="/topic/:topic" />
        <EachArticle path="/articles/:article_id" />
        <ErrorHandler default />
      </Router>
    </div>
  );
}

export default App;
