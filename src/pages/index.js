import React, { useRef, useState } from 'react'
import styles from '../styles/Home.module.css';
import ColorSlider from './Components/ColorSlider';
import HomePageBody from './Components/HomePageBody'
import HomePageFooter from './Components/HomePageFooter'
import StaticLogo from './Components/StaticLogo';
import Link from 'next/link';

export default function Home() {

  const [hamburguerArray, setHamburguerArray] = useState([[0, 0.35],[0, 0],[0, -0.35]]);
  const [sideOptionsPlace, setSideOptionsPlace] = useState(-100);
  const hamburguerSwitch = useRef(true);

  const handleHamburguerAnim = () => {

    if (hamburguerSwitch.current){

      setHamburguerArray([[45, 0],[45, 0],[-45, 0]]);

      setSideOptionsPlace(0);

      hamburguerSwitch.current = !hamburguerSwitch.current;

    }else if (!hamburguerSwitch.current){

      setHamburguerArray([[0, 0.35],[0, 0],[0, -0.35]]);

      setSideOptionsPlace(-100)

      hamburguerSwitch.current = !hamburguerSwitch.current;

    }

  }


  return (
    <>
      <header className={styles.pageHeader}>

          <div className={styles.headerContainer}>

            <div 
            className={styles.hamburguerMenuWrapper}
            onClick={handleHamburguerAnim}
            >

              <div className={styles.hamburguerMenu}>

                <div 
                className={styles.hamLine}
                style={{
                ["--anim-deg"] : hamburguerArray[0][0] + "deg",
                ["--anim-y"] : hamburguerArray[0][1] + "rem"
                }}
                ></div>

                <div 
                className={styles.hamLine}
                style={{
                ["--anim-deg"] : hamburguerArray[1][0] + "deg",
                ["--anim-y"] : hamburguerArray[1][1] + "rem"

                }}
                ></div>

                <div 
                className={styles.hamLine}
                style={{
                ["--anim-deg"] : hamburguerArray[2][0] + "deg",
                ["--anim-y"] : hamburguerArray[2][1] + "rem"
                }}
                ></div>

              </div>

            </div>

            <div className={styles.logoContainer}>

                <StaticLogo/>

            </div>

            <div className={styles.signUpButton}>

              <div
              className={styles.jogarButton}
              >

                  jogar

              </div>
            </div>

          </div>

          <ColorSlider/>

      </header>

      <div 
      className={styles.sideOptions}
      style={{
      ["--side-place"] : sideOptionsPlace + "%",
      }}
      >

        

      </div>

      <HomePageBody/>

      <HomePageFooter/>

    </>
  )
}