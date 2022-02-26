import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/layout/NavBar';

function App() {
  return (
    <Router className="app">
      <div className="flex flex-col justify-between h-screen">
      <NavBar/>
      <main>Content</main>
      </div>
    </Router>
  );
}

export default App;

// function App() {
//   return (
//     <div className="bg-purple-500">  
//       <h3 className="text-3xl font-bold underline">github finder</h3>
//       <button className="btn">this is a button</button>
//     </div>
//   );
// }

// export default App;

