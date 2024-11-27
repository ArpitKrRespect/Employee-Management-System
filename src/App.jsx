import { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  
  const handleLogin = (email,password) => {
    if(email=="admin@example.com" && password=="123456"){
      setUser('admin')
      console.log('admin')
    }
    else if(email=="arpit@example.com" && password=="123456"){
      setUser('employee')
      console.log('employee')
    }
    else
    alert("Invalid Credentials");
  }

  const data = useContext(AuthContext)
  console.log(data)

  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ''}
    {user == 'admin' ? <AdminDashboard/>:''}
    {user == 'employee' ? <EmployeeDashboard/>:''}
    </>
  )
}

export default App