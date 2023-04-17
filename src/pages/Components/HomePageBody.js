import { useState } from 'react'
import styles from './ComponentStyles/HomePageBody.module.css'

function HomePageBody() {

    const [cardMap, setCardMap] = useState([
    {color : '#ffff00', deg : 2},
    {color : '#ff00ff', deg : -2}
    ])

  return (
    <div className={styles.container}>

        <div className={styles.card}>

            <div 
            className={styles.backgroundGlass}
            style={{
            ['--background-glass'] : cardMap[0].color + '3d',
            ['--border-glass'] : cardMap[0].color + '63',
            ['--deg-glass'] : cardMap[0].deg + 'deg',
            }}
            >

            </div>

            <div className={styles.cardContent}>
                test
            </div>

        </div>

        <div className={styles.card}>

            <div 
            className={styles.backgroundGlass}
            style={{
            ['--background-glass'] : cardMap[1].color + '3d',
            ['--border-glass'] : cardMap[1].color + '63',
            ['--deg-glass'] : cardMap[1].deg + 'deg',
            }}
            >

            </div>

            <div className={styles.cardContent}>
                test
            </div>

        </div>

    </div>
  )
}

export default HomePageBody