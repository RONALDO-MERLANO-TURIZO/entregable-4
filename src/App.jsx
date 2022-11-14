
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'

function App() {

  const [ usersList, setUsersList ] = useState([])
  const [ usersSelected, setUsersSelected ] = useState(null)

  useEffect(() => {
    axios
      .get('https://users-crud1.herokuapp.com/users/')
        .then( res => setUsersList( res.data ))
  }, [])

  const getUsers = () => {
    axios
      .get('https://users-crud1.herokuapp.com/users/')
        .then( res => setUsersList( res.data ))
  }

  const usersSelect = (users) => {
    setUsersSelected(users)
  }

  const deleteUsers = (id) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
        .then(() => getUsers())
  }

  const deselectUsers = () => setUsersSelected(null)

  console.log(usersList)

  return (
    <div className="App">
      <div className='users-list'>
        <UsersList 
          usersList={usersList} 
          usersSelect={usersSelect} 
          deleteUsers={deleteUsers}
        />
      </div>
      
      <UsersForm 
        getUsers={getUsers} 
        usersSelected={usersSelected} 
        deselectUsers={deselectUsers}
        usersSelect={usersSelect}
      /> 
    </div>
    
  )
}

export default App

//No se te olvide hacer los dos ejercicios de replit 
