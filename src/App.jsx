import { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {

  const [user, setUser] = useState(null)


  return (
    <>
    {!user ? <Login/>:''}
      <EmployeeDashboard/>
      <AdminDashboard/>


    </>
  )
}
1
export default App