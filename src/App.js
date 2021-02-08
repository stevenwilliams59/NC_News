import './App.css';
import ArticleList from './components/ArticleList';
import Nav from './components/Nav';
import Title from './components/Title';
import Router from '@reach/router';

function App() {
  return (
    <div className="App">
      <Title />
      <Nav />
      <ArticleList />
      <Router>
        <ArticleList path="/" />
        <ArticleList path="/:topic" />
      </Router>
    </div>
  );
}

export default App;
