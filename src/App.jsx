import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Homepage/Home';
import Xray from './Components/X-ray/Xray';
import Travel from './Components/Travel/Travel';
import CCTV from './Components/CCTV/CC';

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/xray" element={<Xray />} />
      <Route path="/travel" element={<Travel />} />
      <Route path="/cctv" element={<CCTV />} />
    </Routes>
    </>
  )
}

export default App;