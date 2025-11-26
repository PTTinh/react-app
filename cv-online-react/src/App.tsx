import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import '../public/scss/style.scss'
import MainLayout from './layouts/MainLayout'
import PersonnalInfo from './pages/personal-info'
import Skills from './pages/skills'
import Projects from './pages/projects'

function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route element={<MainLayout  />}>
          <Route path='/' element={<PersonnalInfo   />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
        </Route>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
