import { CustomContext } from "../../config/context/Context"
import { useContext } from "react"
import { useState } from "react";
import "../../scss/profile.scss"

const Room = () => {
  const {user} = useContext(CustomContext);
  
  return (
    <section className='profile'>
      <div className='container'>
        <div className="profile__inner">
          Welcome to mebel, {user.name}
          <br />
          <br />
          <h2>{user.name + " " + user.surname}</h2>
          <div className="profile__user-pair">
            <h3>Email: </h3>
            {user.email}
          </div>
          <div className="profile__user-pair">
            <h3>Phone: </h3>
            {user.phone}
          </div>
          <div className="profile__user-pair">
            <h3>Points: </h3>
            {user.point}
          </div>
          <div className="profile__user-pair">
            <h3>Carts: </h3>
            {/* {user.carts.length ? user.carts.map((item, idx) => <div>{idx}</div>) : "You don't have any carts yet"} */}
          </div>
          <div className="profile__user-pair">
            <h3>City: </h3>
            {user.city}
          </div>
          <div className="profile__user-pair">
            <h3>Orders: </h3>
            {/* {user.orders.length ? user.orders.map((item, idx) => <div>{idx}</div>) : "You don't have any orders yet"} */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Room