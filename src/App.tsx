import { Routes , Route ,Link } from 'react-router-dom';
import Header  from 'components/commons/headers';

import HomePage from './pages'
import LoginPage from './pages/login'
import RedfishPage from './pages/redfish'
import { SessionProvider  } from './contexts/sessionContext'

import './App.css';

const App = () => {


  console.log("로컬 스토리지:" ,localStorage)


  return (
    <SessionProvider>
      <Header/>

      <button className="py-2 px-4 rounded-lg shadow-md text-white bg-blue-500">
  Click me
  </button>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
  
        {/* <Route path="redfish" element={<RedfishPage />}/> */}
          {/* <Route path="me" element={<OwnUserProfile />} />
          <Route path=":id" element={<UserProfile />} /> */}
          {/* ?      </Route> */}
      </Routes>
    </SessionProvider>
  );
}

export default App;
