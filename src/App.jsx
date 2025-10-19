import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Bounce, ToastContainer } from 'react-toastify'
import { HomePage, Login, Signup } from './pages'
import Dashboard from './pages/Dashboard'
import Report from './pages/Report'
import FamilyMembers from './pages/family'
import SingleReport from './pages/SingleReport'
import AuthRoute from './routes'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route element={<AuthRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/reports' element={<Report />} />
          <Route path='/members' element={<FamilyMembers />} />
          <Route path='/single_report' element={<SingleReport />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  )
}

export default App
