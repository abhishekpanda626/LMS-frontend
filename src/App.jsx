import Header from './components/Header';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
//import Admin from './components/Admin';
import Tlogin from './components/teacher/Tlogin';
import Slogin from './components/student/Slogin';
import Showbooks from './components/books/Showbooks';
import Sprofile from './components/student/Sprofile';
import Tprofile from './components/teacher/Tprofile';
import Teacherreg from './components/teacher/Teacherreg';
import Studentreg from './components/student/Studentreg';
import About from './components/About';
import Protected from './components/Protected';
import Student from './components/Student';
import Teacher from './components/Teacher';
import Manage from './components/teacher/ManageStudent';
import Managebooks from './components/books/Managebooks';
import Addbooks from './components/books/Addbooks';
function App() {
  return (
    <div className="App">
     <Router>
      <Header/>
      <Routes>
      <Route path='/' element={<About/>} />

      <Route element={<Teacher/>}>
      <Route path='/teacher/profile' element={<Tprofile/>} />
      <Route path='/books/manage' element={<Managebooks/>} />
      <Route path='/books/add' element={<Addbooks/>} />
      <Route path='/manage/students' element={<Manage/>} />
      </Route>

      <Route element={<Student/>}>
      <Route path='/books/show' element={<Showbooks/>} />
      <Route path='/student/profile' element={<Sprofile/>} />
      </Route>

       <Route element={<Protected/>}>
      <Route path='/teacher/login' element={<Tlogin/>} />
      <Route path='/teacher/signup' element={<Teacherreg/>} />
      <Route path='/student/signup' element={<Studentreg/>} />
       <Route path='/student/login' element={<Slogin/>} />
       </Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
