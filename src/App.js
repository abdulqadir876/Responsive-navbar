import './App.css';
// import Navbar from './components/Nav';
import Header from './components/Header';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';


function App() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 h-full">
      <Header/>
      <div className='w-[90%] mx-auto'>
      <Page1/>
      <Page2/>
      <Page3/>

      </div>
    </div>
  );
}

export default App;
