import Navigation from './components/Menu/Menu';
import './app.css';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
