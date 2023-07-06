import "./App.css";
import Disneyplus from "./components/Disneyplus";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Sports from "./components/Sports";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Video from "./components/Video";

function App() {
  const ss = {
    backgroundColor: "#121927",
    height: "100%",
  };
  
  return (
    <>
      <section style={ss}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Disneyplus />} />
            <Route path="/Movies" element={<Movies/>}/>
            <Route path="/Sports" element={<Sports/>}/>
            <Route path="/video" element={<Video/>}/>
          </Routes>

          
        </Router>
      </section>
    </>
  );
}

export default App;
