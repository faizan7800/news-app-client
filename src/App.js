import "./App.css";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import About from "./components/About/About";
import PageNotFound from "./components/PageNotFound";
function App() {
  const [username, setUserame] = useState("");
  const [toggleMode, setToggleMode] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserame(user.displayName);
      } else {
        setUserame("");
      }
      console.log(user);
    });
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <>
                <Header
                  username={username}
                  category="general"
                  toggleMode={toggleMode}
                  setToggleMode={setToggleMode}
                />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          />
          <Route
            path="/pagenotfound"
            element={
              <>
                <PageNotFound />
              </>
            }
          />
          <Route
            path="/sports"
            element={
              <>
                <Header
                  username={username}
                  key="sports"
                  category="sports"
                  toggleMode={toggleMode}
                  setToggleMode={setToggleMode}
                />
              </>
            }
          />
          <Route
            path="/general"
            element={
              <>
                <Header
                  username={username}
                  key="general"
                  category="general"
                  toggleMode={toggleMode}
                  setToggleMode={setToggleMode}
                />
              </>
            }
          />
          <Route
            path="/science"
            element={
              <>
                <Header
                  username={username}
                  key="science"
                  category="science"
                  toggleMode={toggleMode}
                  setToggleMode={setToggleMode}
                />
              </>
            }
          />
          <Route
            path="/health"
            element={
              <>
                <Header
                  username={username}
                  key="health"
                  category="health"
                  toggleMode={toggleMode}
                  setToggleMode={setToggleMode}
                />
              </>
            }
          />
          <Route
            path="/technology"
            element={
              <>
                <Header
                  username={username}
                  key="technology"
                  category="technology"
                  toggleMode={toggleMode}
                  setToggleMode={setToggleMode}
                />
              </>
            }
          />
          <Route
            path="/business"
            element={
              <>
                <Header
                  username={username}
                  key="business"
                  category="business"
                  toggleMode={toggleMode}
                  setToggleMode={setToggleMode}
                />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
export default App;
