import { useState, useRef } from 'react'
import Image from 'next/image';
import clearImg from '../images/XIcon.svg'
import searchImg from '../images/SearchIcon.svg'
import styles from '../styles/games.module.css'
import GameCard from './Components/GameCard';
import StaticLogo from './Components/StaticLogo';

export default function play() {

  const [headerSearch, setHeaderSearch] = useState("");
  const clearShow = useRef("none");

  const headerSearchHandler = (event) => {

    setHeaderSearch(event.target.value);

    if(event.target.value != ""){

      clearShow.current = "block";

    }else{

      clearShow.current = "none";

    }

  }

  const clearHeaderSearch = () => {

    setHeaderSearch("");

    clearShow.current = "none";

  }


  return (
    <div className={styles.container}>

      <header className={styles.header}>

        <div className={styles.headerSearch}>

          <Image
            src={searchImg}
            className={styles.searchIcon}
          />

          <input 
          value={headerSearch}
          onChange={headerSearchHandler}
          className={styles.headerSearchInput}
          placeholder="Buscar"
          />

          <div 
          className={styles.inputClear}
          onClick={clearHeaderSearch}
          >

            <Image
              src={clearImg}
              className={styles.clearSearch}
              style={{
              ["--display-clear"] : clearShow.current,
              }}
            />

          </div>

        </div>

        <StaticLogo/>

      </header>

      <div className={styles.gamesSideNav}>

        <div className={styles.topNav}>

        </div>

        <div className={styles.bottomNav}>

          <div className={styles.signUp}>

          </div>

        </div>

      </div>

      <section className={styles.gamesSecWrapper}>

        <div className={styles.gamesSec}>

          <GameCard/>

          <GameCard/>

        </div>

      </section>
    </div>
  )
}