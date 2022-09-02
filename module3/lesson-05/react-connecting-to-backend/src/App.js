import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/HomePage';
import ApartmentsPage from './pages/ApartmentsPage';
import ApartmentDetailsPage from './pages/ApartmentDetailsPage';
import AddApartmentPage from './pages/AddApartmentPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/apartments"} element={<ApartmentsPage />} />
        <Route path={"/apartments/:apartmentId"} element={<ApartmentDetailsPage />} />
        <Route path={"/apartments/add"} element={<AddApartmentPage />} />
      </Routes>
    </div>
  );
}

export default App;
