import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
  return (<div className='flex flex-col text-center bg-gradient-to-r from-red-500 to-blue-200 w-screen h-screen '>
      <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />}/>
        <Route path='/'>
        <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        </Route>
    </Routes>
  </BrowserRouter>  
  </div>
  
  );
}

export default App;
