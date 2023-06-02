"use client"
import styles from "./Card.module.css"
const Card = (props)=>
{
    let {product} = props;

    return  <div className={styles.card}>
            <img src={product.Poster} alt={product.Title}/>   
            <div className={styles.cardbody}>
                <h1 className={styles.title}>{product.Title}</h1>
                <div className={styles.content}><p className={styles.type}>{product.Type}</p><span>|</span><p className={styles.year}>{product.Year}</p></div>
                <p className={styles.about}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </div>
            <button className={styles.btn}>watch now</button>     
            </div>           
            
}

export default Card;