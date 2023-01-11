import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Dashboard from './Component/Dashboard/Dashboard';
import Services from './Component/Services/Services';
import About from './Component/About/About';

function App() {
  return (
    <div className="App">
    <Header/>
      <Dashboard/>
      <Services/>
      <About/>

    </div>
  );
}

export default App;
