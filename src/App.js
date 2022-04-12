import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./context/GitHub/GitHubContext";
import { AlertProvider } from "./alert/AlertContext";
import Alert from "./components/layout/Alert";
import User from "./pages/User";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router className="app">
          <div className="flex flex-col justify-between h-screen">
            <NavBar />
            <main className="container px-3 pb-12 mx-auto">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />

                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
