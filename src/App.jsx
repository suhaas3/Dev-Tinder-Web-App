import './index.css';
import 'tailwindcss';
import Navbar from './Navbar';

function App() {

  return (
    <>
    <Navbar/>
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <button className="btn btn-primary">
        DaisyUI Button 🚀
      </button>
    </div>
    </>
  )
}

export default App
