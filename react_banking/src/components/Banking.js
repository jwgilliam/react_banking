import { UserContext } from "../users/UserProvider"
import { useContext } from "react"


// const { user } = useContext(UserContext)

export default function Banking() {
  return (
    <>
      <h2>Put your money here please</h2>
      <form>
        <h3 className="user_balance"></h3>
        <input className="banking_form" type="text"></input>
        <button className="banking_deposit">deposit</button>
        <button className="banking_withdrawal">withdraw</button>
      </form>
    </>
  )
}