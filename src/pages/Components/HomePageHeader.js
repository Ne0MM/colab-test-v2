import ColabLogo from './ColabLogo';
import styles from './ComponentStyles/HomePageHeader.module.css';
import { useEffect, useState, useRef } from "react";

export default function HomePageHeader() {

  const [slideValue, setSlideValue] = useState(-50);
  const slideSwitch = useRef(false);

  const slideTimer = 2000;

  const handleSlideColors = (actSlide) => {

    if (actSlide == -50){

      actSlide = 0;

    }else {
      
      actSlide = actSlide - 10;

    }

    setSlideValue(actSlide);

    setTimeout(() => {
      handleSlideColors(actSlide);
    }, slideTimer)

  }

  useEffect(() => {

    if (slideSwitch.current == false){

      handleSlideColors(slideValue);

      slideSwitch.current = !slideSwitch.current;

    }

  },[])

  return (
    <header className={styles.pageHeader}>

        <div className={styles.headerContainer}>

            <div className={styles.logoContainer}>

            </div>

        </div>

        <div 
        className={styles.colorSlide}
        style={{
        ['--slide-value'] : slideValue + '%'
        }}
        >

        </div>

    </header>
  )
}