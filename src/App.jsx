import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Bounce, ToastContainer } from 'react-toastify'
import { HomePage , Login, Signup } from './pages'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
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
