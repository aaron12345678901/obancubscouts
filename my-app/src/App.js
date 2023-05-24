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
import Aduiltregdisclosure from "./pages/Aduiltpages/Aduiltregdisclosure";
import Aduiltprofile from "./pages/Aduiltpages/Aduiltprofile";
import Aduiltreghelper from "./pages/Aduiltpages/Aduiltreghelper";
import Aduiltregtraining from "./pages/Aduiltpages/Aduiltregtraining";
import Aduiltschildp from "./pages/Aduiltpages/Aduiltschildp";
import Aduiltchildmerits from "./pages/Aduiltpages/Aduiltchildmerits";
import Aduiltseventsreg from "./pages/Aduiltpages/Aduiltseventsreg";

import Adminregaduilts from "./pages/Admin/Adminregaduilts";
import Adminregprofile from "./pages/Admin/Adminregprofile";
import Adminchildren from "./pages/Admin/Adminchildren";
import Adminchildprofile from "./pages/Admin/Adminchildprofile";
import Adminchildmerits from "./pages/Admin/Adminchildmerits";
import Admingallery from "./pages/Admin/Admingallery";
import AdminEvents from "./pages/Admin/AdminEvents";
import Admintrainingevents from "./pages/Admin/Admintrainingevents";
import Regawait from "./pages/Regawait";

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
          <Route path="/Regawait" element={<Regawait />} />


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

          <Route path="/Adminregaduilts"element={<Adminregaduilts />}/>
          <Route path="/Adminregprofile/:id"element={<Adminregprofile />}/>
          <Route path="/Adminchildren"element={<Adminchildren />}/>
          <Route path="/Adminchildprofile/:id"element={<Adminchildprofile />}/>
          <Route path="/Adminchildmerits/:id"element={<Adminchildmerits />}/>
          <Route path="/Admingallery"element={<Admingallery />}/>
          <Route path="/AdminEvents"element={<AdminEvents />}/>
          <Route path="/Admintrainingevents"element={<Admintrainingevents />}/>
        </Routes>





        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;