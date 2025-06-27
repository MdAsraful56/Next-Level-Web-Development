import { Outlet } from 'react-router';
import './App.css';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className=''>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default App
