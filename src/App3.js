import './App.css';

// import Login from "./Login";
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
// import store from './store/reducer';
// import Shop from './store/Shop';
// import Logout from './Logout';
import NestedGrid from './MUII2/NestedGrid';
import ComplaintEnq from './MUII2/ComplaintEnq';
import GoogleMapInt from './MUII2/GoogleMapInt';
import FetchImages from './components/FetchImages';
import CitizenLogin from './Login/CitizenLogin';
import Registration from './Login/Registration';
import WorkerLogin from './Login/WorkerLogin';
import OfficialLogin from './Login/OfficialLogin';
import AdminLogin from './Login/AdminLogin';



// Containers
// const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

function App3() {
  return (
    <>
    <BrowserRouter >
    {/* <Provider store={store}> */}
    <Routes>

      {/* <Route exact path="/" element={<Login />}>
      </Route> */}

      {/* <Route path="*" name="Home" element={<DefaultLayout />} /> */}
      
      <Route path="/" element={ <NestedGrid />}>
      </Route>

      <Route path="/admin/login" element={ <AdminLogin />}> 
      </Route>
            
      <Route path="/official/login" element={ <OfficialLogin />}> 
      </Route>
      
      <Route path="/worker/login" element={ <WorkerLogin />}> 
      </Route>
      
      <Route path="/citizen/registration" element={ <Registration />}> 
      </Route>
      
      
      <Route path="/citizen/login" element={ <CitizenLogin />}> 
      </Route>
      
      
      <Route path="/complaintenquiry" element={ <ComplaintEnq />}>
      </Route>

      {/* <Route path="/official/login" element={<FetchImages />}>
      </Route> */}
      
    </Routes>
    {/* </Provider> */}
  </BrowserRouter>
  
  </>
    );
}

export default App3;
