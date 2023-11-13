import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hook/useCrud'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'


function App() {

  const [infoUpdate, setInfoUpdate] = useState()
  const [isDisable, setIsDisable] = useState(false)
  
  const url = 'https://users-crud.academlo.tech'

  const [users, getUsers, createUser, deleteUser, updateUser] = useCrud(url)

  useEffect(() => {
    getUsers('/users')
  }, [])
  console.log(users)

  const handleNewUser = () => {
    setIsDisable(false)
  }

  return (
   <div>
    <h1>Users</h1>
    <button onClick={handleNewUser} className='form__btn_1'>Creat new User</button>
    <FormUser
      createUser={createUser}
      infoUpdate = {infoUpdate}
      updateUser = {updateUser}
      setInfoUpdate = {setInfoUpdate}
      isDisable = {isDisable}
      setIsDisable={setIsDisable}
    />
    <div>
      {
       users?.map(user => (
          <UserCard 
            key = {user.id}
            user = {user}
            deleteUser = {deleteUser}
            setInfoUpdate= {setInfoUpdate}
            setIsDisable={setIsDisable}
          /> 
        ))
      }
    </div>
   </div>
  )
}

export default App
