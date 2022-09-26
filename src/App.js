import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';
import Rockets from './pages/Rockets';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
