import { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {
  const [user, setUser] = useState(null)
  const handleLogin = (email,password) => {

    if(email=="admin@example.com" && password=="123456"){
      setUser('admin')

    }
    else if(email=="arpit@example.com" && password=="123456"){
      setUser('employee')
    }
    else
    alert("Invalid Credentials");
  }
  console.log(user)
  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ''}
    {user == 'admin' ? <AdminDashboard/>:''}
    {user == 'employee' ? <EmployeeDashboard/>:''}
    </>
  )
}

export default App