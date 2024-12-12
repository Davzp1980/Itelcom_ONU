import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Register_ONU from './pages/Register_ONU/Register_ONU';
import Register_Onu_Switch from './pages/Register_Onu_Switch/Register_Onu_Switch';
import Unregister_Onu from './pages/Unregister_Onu/Unregister_Onu';
import Check_Onu from './pages/Check_Onu/Check_Onu';
import Reload_Onu from './pages/Reload_Onu/Reload_Onu';
import Add_DHCP from './pages/Add_DHCP/Add_DHCP';
import Modal_burger from './components/Modal_burger/Modal_burger';
import { useSelector } from 'react-redux';
import { selectIsModalOpen } from './redux/formData/selectors';
import { Toaster } from 'react-hot-toast';

function App() {
  const isModalOpen = useSelector(selectIsModalOpen);

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register-onu" element={<Register_ONU />} />
          <Route
            path="/register-onu-switch"
            element={<Register_Onu_Switch />}
          />
          <Route path="/unregister-onu" element={<Unregister_Onu />} />
          <Route path="/check-onu" element={<Check_Onu />} />
          <Route path="/reload-onu" element={<Reload_Onu />} />
          <Route path="/add-dhcp" element={<Add_DHCP />} />
        </Routes>
      </main>
      {isModalOpen && <Modal_burger />}
      <Toaster />
    </>
  );
}

export default App;
