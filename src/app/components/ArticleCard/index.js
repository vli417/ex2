"use client";

import Link from 'next/Link'
import styles from "./articleCard.module.css"



const ArticleCard = ({description, title, date, imageSrc, imgAlt,id}) => {
    return(
        <div className={styles.articleCard}>
            <div className={styles.articleCardImage}>
                <img src ={imageSrc} alt={imgAlt}/>
            </div>
            <div className = {styles.articleCardContent}>
                <h2>{title}</h2>
                <p>{date}</p>
                <p>{description}</p>
                <p><Link href={`article/${id}`}>Read More</Link></p>          
            </div>
        </div>

    )

    
};


export default ArticleCard;
