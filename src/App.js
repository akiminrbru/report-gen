import ProjectsPage from './components/pages/ProjectsPage/ProjectsPage';
import AuthPage from './components/pages/AuthPage/AuthPage';
import CreateReport from './components/pages/CreateReportPage/CreateReportPage';
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import ProjectPage from './components/pages/ProjectPage/ProjectPage';
import ProtectedRoute from './components/common/protectedRoute/ProtectedRoute';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ProtectedRoute><ProjectsPage/></ProtectedRoute>}/>
        <Route path="/project/:counterId" element={<ProtectedRoute><ProjectPage/></ProtectedRoute>}/>
        <Route path="/createReport/:counterId" element={<ProtectedRoute><CreateReport/></ProtectedRoute>}/>
        <Route path="/login" element={<AuthPage/>} /> 
      </Routes>
    </BrowserRouter>
  )
}


export default App;
