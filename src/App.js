import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Dashboard from './Component/Dashboard/Dashboard';
import Services from './Component/Services/Services';

function App() {
  return (
    <div className="App">
    <Header/>
      <Dashboard/>
      <Services/>

    </div>
  );
}

export default App;
