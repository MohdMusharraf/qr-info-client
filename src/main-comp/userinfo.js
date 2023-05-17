import React, { useEffect, useState } from "react";
import avatar from "../images/avatar.png"
import addSvg from "../images/address.svg"
import mailSvg from "../images/mail.svg"
import phoneSvg from "../images/phone.svg"
import ageSvg from "../images/age.svg"
import twitterSvg from "../images/twitter.svg"
import instaSvg from "../images/insta.svg"
import linkSvg from "../images/linked.svg"
import gitSvg from "../images/github.svg"
import fbSvg from "../images/fb.svg"
import "./userinfo.css";

export default function Userinfo() {
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://qrinfo.onrender.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        // const lastEl = data
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  const user = users[users.length - 1]
  console.log(user)

  return (
    <div>
    {user && <div className="bg--div">
        <br/>
        <br/>
        <div className="parent-div">
            <img className="img-div" src={avatar}/>
            <div className="top-col">
              <div key={user.id} className="top-col">
                  <h1>{user.fullName}</h1>
                  <h2>{user.jobDes}</h2>
                  <h3>{user.compName}</h3>
              </div>
            </div>
            <div className="mid-col">
              {user.mail && <h3><img src={mailSvg}/>Email</h3>}
              {user.mail && <p>{user.email}</p>}
              {user.age && <h3><img src={ageSvg}/>Age</h3>}
              {user.age && <p>{user.age}</p>}
              {user.contact && <h3><img src={phoneSvg}/>Mobile</h3>}
              {user.contact && <p>{user.contact}</p>}
              {user.address && <h3><img src={addSvg}/>Address</h3>}
              {user.address && <p>{user.address}</p>}
            </div>
            <div className="bot-col">
              <a href={user.twitter}>
                <img src={twitterSvg}/>
              </a>
              <a href={user.instagram}>
                <img src={instaSvg}/>
              </a>
              <a href={user.linkedin}>
                <img src={linkSvg}/>
              </a>
              <a href={user.github}>
                <img src={gitSvg}/>
              </a>
              <a href={user.facebook}>
                <img src={fbSvg}/>
              </a>
            </div>
        </div>
        <br/>
        <br/>
    </div>}
    </div>
  );
}
