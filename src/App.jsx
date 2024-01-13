import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hook/useCrud'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'


function App() {

  const [infoUpdate, setInfoUpdate] = useState()
  const [isDisable, setIsDisable] = useState(false)
  
  const url = 'http://localhost:8080'

  const [users, getUsers, createUser, deleteUser, updateUser] = useCrud(url)

  useEffect(() => {
    getUsers('/users')
  }, [])

  const handleNewUser = () => {
    setIsDisable(false)
  }


  return (
   <div className='container'>
    <h1 className='title'>Users</h1>
    <button onClick={handleNewUser} className='form__btn_1'>Creat new User</button>
    <FormUser
      createUser={createUser}
      infoUpdate = {infoUpdate}
      updateUser = {updateUser}
      setInfoUpdate = {setInfoUpdate}
      isDisable = {isDisable}
      setIsDisable={setIsDisable}
    />
    <div className='container__2' >
      {
       users?.map(user => (
          <div className='users' key = {user.id}>
            <UserCard 
              user = {user}
              deleteUser = {deleteUser}
              setInfoUpdate= {setInfoUpdate}
              setIsDisable={setIsDisable}
           /> 
          </div>
        ))
      }
    </div>
   </div>
  )
}

export default App
