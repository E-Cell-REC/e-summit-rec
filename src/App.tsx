import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import Events from './pages/Events';
import Agenda from './pages/Agenda';
import Speakers from './pages/Speakers';
import Sponsors from './pages/Sponsors';
import Contact from './pages/Contact';
import TicketPerks from './pages/TicketPerks'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/speakers" element={<Speakers />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/perks" element={<TicketPerks/>} />
    </Routes>
    </>
  );
}

export default App;