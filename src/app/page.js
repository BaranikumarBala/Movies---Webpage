"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import Card from "./Card/Card"
import styles from "./page.module.css"

export default function Home() {

  const [card, setCard] = useState([])

  useEffect(() =>
  {
    axios.get("https://www.omdbapi.com/?apikey=45f0782a&s=war")
    .then(res => setCard(res.data.Search))
    .catch(err => console.log(err))
  })

  return (
    <main className={styles.container}>
      {
        card.length > 0 && card.map((item,idx)=><Card product = {item} key={idx}/>)
      }
    </main>
  )
}
