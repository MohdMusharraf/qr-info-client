import './App.css';
import { Route, Routes } from 'react-router-dom';
import FormApp from './forms-comp/parentForm/formApp';
import Home from './main-comp/home';
import Userinfo from './main-comp/userinfo';
// import SplineEx from './comp/splineEx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/forms' element={<FormApp />} />
          <Route path='/userinfo' element={<Userinfo />} />
          {/* <SplineEx></SplineEx> */}
        </Routes>
      </header>
    </div>
  );
}

export default App;
