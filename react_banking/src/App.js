import './App.css';
import { UserProvider } from './users/UserProvider';
import UserForm from './users/UserForm';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <UserProvider>
        <UserForm />
      </UserProvider>

    </div>
  );
}

export default App;
