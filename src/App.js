import './App.css';
import ArticleList from './components/ArticleList';
import Nav from './components/Nav';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <Title />
      <Nav />
      <ArticleList />
    </div>
  );
}

export default App;
