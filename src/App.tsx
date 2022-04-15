import { Routes , Route ,Link ,useNavigate} from 'react-router-dom';
import Header  from 'components/commons/headers';

import HomePage from './pages'
import LoginPage from './pages/login'
import RedfishPage from './pages/redfish'
import { SessionProvider ,useSessionState } from './contexts/sessionContext'

import './App.css';

const App = () => {
  

  // const navigate = useNavigate();

  // const session = useSessionState()

  // if(session.id === '') navigate('/login')
  
  return (
    <SessionProvider>
      <main className="w-screen h-screen bg-gray-100">
        <Header/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
      
            {/* <Route path="redfish" element={<RedfishPage />}/> */}
              {/* <Route path="me" element={<OwnUserProfile />} />
              <Route path=":id" element={<UserProfile />} /> */}
              {/* ?      </Route> */}
          </Routes>
      </main>
    </SessionProvider>
  );
}

export default App;
