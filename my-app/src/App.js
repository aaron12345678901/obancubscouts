import "./scss/app.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Homeevents from "./pages/Homeevents";
import Badges from "./pages/Badges";
import Login from "./pages/Login";
import Games from "./pages/Games";
import Gallery from "./pages/Gallery";


import Childrensprofile from "./pages/Childrenspages/Childrensprofile";
import Cprofilemerits from "./pages/Childrenspages/Cprofilemerits";
import Childsgallery from "./pages/galleries/Childsgallery";


import Aduiltandchild from "./pages/galleries/Aduiltandchild";
import Aduiltgallery  from "./pages/Aduiltpages/Aduiltgallery"
import Aduiltlanding from "./pages/Aduiltpages/Aduiltlanding"
import Aduiltnav from "./components/Aduiltnav";
import Aduiltregdisclosure from "./pages/Aduiltpages/Aduiltregdisclosure";
import Aduiltprofile from "./pages/Aduiltpages/Aduiltprofile";
import Aduiltreghelper from "./pages/Aduiltpages/Aduiltreghelper";
import Aduiltregtraining from "./pages/Aduiltpages/Aduiltregtraining";
import Aduiltschildp from "./pages/Aduiltpages/Aduiltschildp";
import Aduiltchildmerits from "./pages/Aduiltpages/Aduiltchildmerits";
import Aduiltseventsreg from "./pages/Aduiltpages/Aduiltseventsreg";





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
          <Route path="/Gallery" element={<Gallery />} />



          <Route path="/childrensprofile" element={<Childrensprofile />} />
          <Route path="/cprofilemerits" element={<Cprofilemerits />} />
          <Route path="/Childsgallery" element={<Childsgallery />} />


          <Route path="/aduiltlanding" element={<Aduiltlanding />} />
          <Route path="/Aduiltregdisclosure"element={<Aduiltregdisclosure />}/>
          <Route path="/Aduiltandchild"element={<Aduiltandchild />}/>
          <Route path="/Aduiltprofile"element={< Aduiltprofile />}/>
          <Route path="/Aduiltreghelper"element={<Aduiltreghelper />}/>
          <Route path="/Aduiltregtraining"element={<Aduiltregtraining/>}/>
          <Route path="/Aduiltschildp"element={<Aduiltschildp />}/>
          <Route path="/Aduiltchildmerits"element={<Aduiltchildmerits />}/>
          <Route path="/Aduiltseventsreg"element={<Aduiltseventsreg />}/>
          <Route path="/Aduiltgallery"element={<Aduiltgallery />}/>


        </Routes>





        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;