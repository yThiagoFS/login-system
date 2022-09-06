import { useContext } from 'react';
import './App.css';
import { Home } from "./Pages/Home"
import { Private } from "./Pages/Private"
import { RequireAuth } from "./contexts/Auth/RequireAuth"
import { AuthContext } from "./contexts/Auth/AuthContext"
import { Routes, Route, Link, useNavigate } from "react-router-dom"
function App() {

  const { user,signout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = async () => {
    signout()
    navigate('/')
  }

  return (
      <div className="App">
        <header>
          <h1>Site header</h1>
          <nav>
           <Link to="/">Home</Link>
           <br />
           <Link to="/private">Private</Link><br/>
           {user && <button onClick={handleLogout}>sair</button>}
          </nav>
        </header>
        <hr/>
        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/private" element={
          <RequireAuth>
            <Private/>
          </RequireAuth>}>Private</Route>
        </Routes>

      </div>
  );
}

export default App;
