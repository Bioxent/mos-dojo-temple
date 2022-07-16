import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MainContent from './components/layout/MainContent';
import BackgroundView from './components/layout/BackgroundView';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
