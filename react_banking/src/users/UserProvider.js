import { useState, useEffect, createContext } from "react"


export const UserContext = createContext()

export function UserProvider(props) {

  const [users, setUsers] = useState()
  const [user, setUser] = useState()
  const [isSignedIn, setSignedIn] = useState(false)

  useEffect(() => {
    getUsers()
  }, [])

  const loginUser = (user) => {
    setUser(user)
    localStorage.setItem("activeUser", user.id)
  }

  const getUsers = () => {
    return fetch("http://localhost:8088/users")
      .then((response) => response.json())
      .then((response) => setUsers(response))
  }

  const registerUser = (user) => {
    return fetch("http://localhost:8088/users", {
      method: "Post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(getUsers)
      .then(loginUser(user))
  }

  return (
    <UserContext.Provider value={{ users, loginUser, getUsers, registerUser, isSignedIn, setSignedIn }}>{props.children}</UserContext.Provider>
  )
}