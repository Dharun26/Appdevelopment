import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Register from './Register';


function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" exact element={<Main/>}/>
       <Route path="/register" exact element={<Register/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;