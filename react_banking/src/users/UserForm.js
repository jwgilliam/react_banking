import "./UserForm.css"
import { useContext, useEffect } from "react"
import { UserContext } from "./UserProvider"
import { useState } from "react"

export default function UserForm() {



  const [isSignup, setIsSignup] = useState(false)




  let signUpField = <><input type="email" className="user_email" required placeholder="e-mail"></input> <input type="text" className="initial_deposit" required placeholder="Initial Deposit"></input><button className="register_button">Register</button> </>

  const { users, loginUser, registerUser, isSignedIn, setSignedIn } = useContext(UserContext)
  useEffect(() => {
    if (localStorage.getItem("activeUser")) {
      setSignedIn(true)
    }
  }, [])
  const loginHandler = (event) => {
    event.preventDefault()

    let formData = getFormData()

    let loggedIn = localStorage.getItem("activeUser")





    const foundUser = users.find(registeredUser => registeredUser.userName === formData.userName && registeredUser.password === formData.password)
    if (foundUser) {
      loginUser(foundUser)
      clearForm()
      setSignedIn(true)
    }

    if (isSignup) {
      registerUser(formData)
      clearForm()
      setIsSignup(false)

      return
    }

  }

  const registrationHandler = () => {
    setIsSignup(true)
  }

  const logoutHandler = () => {
    localStorage.removeItem("activeUser")
    setSignedIn(false)
  }

  const clearForm = () => {
    document.querySelector(".user_name").value = ""
    document.querySelector(".user_password").value = ""
    if (isSignup) {
      document.querySelector(".user_email").value = ""
    }
  }

  const getFormData = () => {
    let email
    let balance
    if (isSignup) {
      email = document.querySelector(".user_email").value
      balance = parseInt(document.querySelector(".initial_deposit").value, 10)
    }
    const form = {
      userName: document.querySelector(".user_name").value,
      password: document.querySelector(".user_password").value,
      email: email,
      balance: balance

    }
    return form
  }

  return (
    <>
      <form className="user_login" id="user_login_form" onSubmit={loginHandler}>
        <input type="hidden"></input>
        <input className="user_name" type="text" placeholder="user name" required></input>
        <input className="user_password" type="password" placeholder="password" required></input>
        {isSignup ? signUpField : null}

      </form>
      {isSignup ? null : <button className="register_button" onClick={registrationHandler}>Sign Up!</button>}
      {isSignedIn ? <button className="logout_button" onClick={logoutHandler}> log out</button> : <button className="login_button" type="submit" form="user_login_form">Login</button>}
    </>
  )
}