import React from "react"
import style from "./home.module.css"

type Props = {}

const Home = (props: Props) => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Welcome, fullname email show photo</h1>
      <div className={style.box}>
        <input type="file" onChange={(e) => console.log(e)} />
        <button>change photo</button>
      </div>
    </div>
  )
}

export default Home
