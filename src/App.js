import mara from './mara.jpg';
import Header from './components/Header';
import Cards from './components/Cards';
import Buttons from './components/Buttons';
import Footer from './components/Footer';
import './stylesheets/reset.css';
import './App.css';

function App() {
  return (
    <div className='content'>
      <div className="content-inside">
        <Header/>
        <Cards/>
        <Buttons/>
      </div>
      <div className='footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
