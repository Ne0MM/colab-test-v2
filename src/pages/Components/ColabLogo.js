import { useEffect, useState } from 'react'
import styles from './ComponentStyles/ColabLogo.module.css'

function ColabLogo(props) {

    let animTime = 150;

    const [cardMap, setCardMap] = useState([
        {color : '#ff00ffd9', deg : -90, scale : 0},
        {color : '#ff7f00d9', deg : 0, scale : 0},
        {color : '#00ff00d9', deg : 90, scale : 0},
        {color : '#0000ffda', deg : 180, scale : 0},
        {color : '#ff0000e5', deg : -35, scale : 0},
        {color : '#ffff00e5', deg : 55, scale : 0},
        {color : '#037fffe6', deg : 145, scale : 0},
        {color : '#7f00ffe6', deg : 235, scale : 0},
    ])

    const handleCardAnim = () => {

        const updatedCardMap = cardMap.map((e,index) => {
            
                return {...e, deg : cardMap[index].deg + 90}

        }) 

        setCardMap(updatedCardMap)

    }

    useEffect(() => {

        setTimeout(() => {
            
            	handleCardAnim();

        }, 300);

    },[])

  return (

    <div className={styles.container}>

        <div className={styles.logoContainer}>

            <div className={styles.center}>

                    <span className={styles.centerLetter}>C</span>

            </div>

            {cardMap.map((element,index) => {

                return(

                    <div 
                    className={styles.cardContainer}
                    style={{
                    ['--card-angle'] : (cardMap[index].deg) + 'deg',
                    }}
                    >

                        <div
                        className={styles.card}
                        style={{
                        ['--backgroud-color'] : cardMap[index].color,
                        }}       
                        >

                        </div>

                    </div>

                )

            })}

        </div>

    </div>

  )
}

export default ColabLogo