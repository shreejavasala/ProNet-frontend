import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, LoginPage, RegisterPage, ProfilePage, CreatePostPage } from './pages/imports.js';
import './styles/global.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if(!token) {
    return <Navigate to='/login' replace />
  }

  return children;
}

function App() {
  const token = localStorage.getItem('token');

  return (
    <>
      { token && <Navbar /> }
      <Routes>
        <Route path='/' element={ <Navigate to='/login' /> } />
        <Route path='/login' element={ <LoginPage /> } />
        <Route path='/register' element={ <RegisterPage /> } />
        <Route 
          path='/home' 
          element={ 
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path='/profile' 
          element={ 
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path='/create' 
          element={ 
            <ProtectedRoute>
              <CreatePostPage />
            </ProtectedRoute>
          } 
        />
      </Routes>
      { token && <Footer /> }
    </>
  )
}

export default App
