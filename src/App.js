import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Serverinfo from "./components/pages/Serverinfo";
import Download from "./components/pages/Download";
import Register from "./components/pages/Register";
import Masuk from "./components/pages/Masuk";
import News from "./components/pages/News";
import Topup from "./components/pages/Topup";
import Home from "./components/pages/Home";
import News3 from "./components/pages/News3";
import News4 from "./components/pages/News4";
import Verifikasi from "./components/pages/Verifikasi";
import VerifRegister from "./components/pages/VerifRegister";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/serverinfo" element={<Serverinfo />} />
          <Route exact path="/download" element={<Download />} />
          <Route exact path="/news">
            <Route index element={<News/>}/>
            <Route path="news/:code" element={<News3/>} />
          </Route>
          <Route exact path="/topup" element={<Topup />} />
          <Route exact path="/berita">
            <Route index element={<News3/>}/>
            <Route path="news/:code" element={<News4/>} />
          </Route>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Masuk />}/>
          <Route exact path="/verifikasi" element={<Verifikasi/>}/>
          <Route exact path="/verifRegister" element={<VerifRegister/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
