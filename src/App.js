import GalleryPage from './components/GalleryPage/GalleryPage';
import Menu from './components/Menu/Menu';
import { Link } from "react-router-dom";
import './app.css';
import MainPage from './components/MainPage/MainPage';

const App = () => {
  return (
    <div>
      <Menu />
      <MainPage />
    </div>
  );
}

export default App;
