import "./scss/app.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Childrensheader from "./components/Childrensheader";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Homeevents from "./pages/Homeevents";
import Badges from "./pages/Badges";
import Login from "./pages/Login";
import Games from "./pages/Games";
import Childrensprofile from "./pages/Childrenspages/Childrensprofile";
import Cprofilemerits from "./pages/Childrenspages/Cprofilemerits";
import Aduiltandchild from "./pages/galleries/Aduiltandchild";
import Aduiltlanding from "./pages/Aduiltpages/Aduiltlanding"
import Aduiltnav from "./components/Aduiltnav";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homeevents" element={<Homeevents />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/login" element={<Login />} />
          <Route path="/games" element={<Games />} />
          <Route path="/childrensprofile" element={<Childrensprofile />} />
          <Route path="/cprofilemerits" element={<Cprofilemerits />} />
          <Route path="/aduiltandchild" element={<Aduiltandchild />} />
          <Route path="/aduiltlanding" element={<Aduiltlanding />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;