
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
<Routes>
  <Route path="/" element={<Main />}/>
  <Route path=":username" element={<Profile/>}/>
</Routes>
</Router>
  
  );
}

export default App;
