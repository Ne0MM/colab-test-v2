import styles from './ComponentStyles/GamesCard.module.css'

export default function GameCard() {

const card = [
    "#ff0000",
    "#ff7f00",
    "#ffff00",
    "#00ff00",
    "#ff00ff",
    "#7f00ff"
  ]

  return (
    <div className={styles.gamesContainer}>

        {card.map((e, index) => {

            return(

                <div className={styles.cardContainerContainer}>

                    <div 
                    className={styles.cardContainer}>

                        <div 
                        className={styles.cardFront}
                        style={{
                        ['--card-color'] : card[index] + "a1",
                        ['--border-glass'] : card[index] + "3d"}}>
                            Imagem do jogo
                        </div>
                        <div
                        className={styles.backCard}
                        style={{
                        ['--card-color'] : card[index] + "a1",
                        ['--border-glass'] : card[index] + "3d"
                        }}>
                            animacao do jogo
                        </div>

                    </div>

                </div>

            )
        })}
    </div>
  )
}