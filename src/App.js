import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddVisitor from './Components/AddVisitor';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddVisitor/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
