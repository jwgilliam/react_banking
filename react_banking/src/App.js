import './App.css';
import { UserProvider } from './users/UserProvider';
import UserForm from './users/UserForm';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Announcements from './components/Announcements';
import Banking from './components/Banking';
import Navbar from './components/navigation/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <UserProvider>
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="home" element={<Home />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="banking" element={<Banking />} />

        </Routes>
      </UserProvider>



    </>
  );
}

export default App;
